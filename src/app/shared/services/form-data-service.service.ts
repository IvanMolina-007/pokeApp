import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormData } from '../interfaces/form-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  private subject = new BehaviorSubject<FormData>({
    url: '',
    name: '',
    hobbie: '',
    age: '',
    personalID: '',

  })

  sendFormData( data:any ){
    this.subject.next( data )
  }

  receiveFormData():Observable<any>{
    return this.subject.asObservable()
  }

  // public formData: FormData = {
  //   url: '',
  //   name: '',
  //   hobbie: '',
  //   age: 0,
  //   personalID: ''
  // }
}
