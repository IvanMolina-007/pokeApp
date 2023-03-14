import { FormDataService } from './../../../shared/services/form-data-service.service';
import { HobbiesService } from './../../services/hobbies.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hobbie } from '../../interfaces/hobbies.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-layout-page',
  templateUrl: './register-layout-page.component.html',
  styleUrls: ['./register-layout-page.component.scss']
})
export class RegisterLayoutPageComponent implements OnInit{

  constructor( private fb:FormBuilder,
               private hobbiesService: HobbiesService,
               private router: Router,
               private formData:FormDataService ){}

  ngOnInit(): void {
    this.hobbies = this.hobbiesService.hobbies;
  }

  // CAPTURE PROFILE IMAGE
  url!:string;

  captureUrl( url:string ):void{
    this.url = url;
  }


  // FORM DECLARATION
  public value!:Date;
  public regExp = /\d{8}(-)\d/;


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    hobbies: [''],
    dateOfBirth:['', [Validators.required]],
    personalID:['', [Validators.required, this.isAnAdult]],
  }, {
    validators: [
      this.isAnAdult('dateOfBirth')
    ]
  });

  // FORM VALIDATIONS AND NAME INPUT AND SUBMIT

  isValidField( field: string): boolean | null {
    return this.myForm.controls[ field ].errors && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null{
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[ field ].errors || {};

    for (const key of Object.keys( errors )){
      switch(key){
        case 'required':
          return 'Este campo es requerido';
      }
    }

    return null;

  }

  getFieldErrorPersonalID( field: string ): string | null{
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[ field ].errors || {};

    for (const key of Object.keys( errors )){
      switch(key){
        case 'required':
          return 'Este campo es requerido';

        case 'pattern':
        return `El documento debe de ser 10 digitos`;
      }
    }

    return null;

  }

  savaLocalStorage( ){
    const hobbies = this.myForm.controls['hobbies'].value
    localStorage.setItem('url', this.url )
    localStorage.setItem('name', this.myForm.controls['name'].value )
    localStorage.setItem('hobbie', hobbies.name )
    localStorage.setItem('age', this.userAge.toString() )
    localStorage.setItem('personalID', this.myForm.controls['personalID'].value )
  }

  submit():void {
    if ( this.myForm.invalid ) {
      return;
    };

    this.formData.sendFormData( {
      url: this.url,
      name: this.myForm.controls['name'].value,
      hobbie: this.myForm.controls['hobbies'].value,
      age: this.userAge.toString(),
      personalID: this.myForm.controls['personalID'].value,
    })

    this.savaLocalStorage();
    this.myForm.reset({ name: ''});
    this.router.navigate(['/pokemon-selection'])
  }



  // HOBBIES GETTING DATA FROM SERVICE
  public hobbies: Hobbie[] = []
  filteredHobbies!: Hobbie[];

  filterHobbies(event:any) {
    let filtered : Hobbie[] = [];
    let query = event.query;

    for(let i = 0; i < this.hobbies.length; i++) {
        let hobbie = this.hobbies[i];
        if (hobbie.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(hobbie);
        }
    }
    this.filteredHobbies = filtered;
  }



  //PERSONAL ID VALIDATION
  age!:Date;
  userAge!: number;
  showAge!: number;
  @ViewChild('documentIdRef')
  public docIdREf!:ElementRef<HTMLInputElement>

  addDash(){
    const inputValue = this.docIdREf.nativeElement.value

    if( inputValue.length === 8){
      this.docIdREf.nativeElement.value = inputValue + '-';
    }
  }

  isAnAdult( field: string ){

    return ( formGroup: FormGroup ) => {
      const dateOfBirthCapture = formGroup.get(field)?.value

      const convertAge = new Date(dateOfBirthCapture);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      this.userAge = age;

      if( age >= 18 ){
        this.addDash()
        formGroup.get('personalID')?.addValidators(Validators.pattern(this.regExp))
      }

    }

  }


}

