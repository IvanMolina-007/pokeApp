import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Hobbies {
  id:number;
  name:string
}


@Component({
  selector: 'app-register-layout-page',
  templateUrl: './register-layout-page.component.html',
  styleUrls: ['./register-layout-page.component.scss']
})
export class RegisterLayoutPageComponent {

  url = '';

  constructor( private fb:FormBuilder ){
    this.hobbies = [
      {id: 1, name: 'Jugar Fútbol'},
      {id: 2, name: 'Jugar Basquetball'},
      {id: 3, name: 'Jugar Tennis'},
      {id: 4, name: 'Jugar Voleibol'},
      {id: 5, name: 'Jugar Fifa'},
      {id: 6, name: 'Jugar Videojuegos'},
    ]
  }

  captureImg( e:any ){
    if( e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL( e.target.files[0]);
      reader.onload=(event:any) => {
        this.url = event.target.result
      }
    }

  }




    // Form
  public hobbies:Hobbies[] = []
  value!: Date;
  text!:string;
  results!:string[]

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
    hobbies: [''],
    dateOfBirth:['', [Validators.required]],
    personalID:['', [Validators.required]]
  })


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

        case 'pattern':
        return `Debes ingresar un nombre y un apellido`;
      }
    }

    return null;

  }

  submit():void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched()
      return;
    };
    console.log( this.myForm.value );
    this.myForm.reset({ name: ''});
  }

  search2( keyword: string ):string[]{
    let names: string[] = [];

    for (let i = 0; i < this.hobbies.length; i++){
      if( this.hobbies[i].name.includes( keyword )){
        names.push( this.hobbies[i].name)
      }
    }

    return names
  }

  search(event:any){
    this.results = this.search2( event.query)
  }

}
