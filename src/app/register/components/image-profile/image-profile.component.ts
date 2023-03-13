import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent {

  @Output()
  public emitter = new EventEmitter();

  // CAPTURE PROFILE IMAGE
  url!:string;

  captureImg( e:any ){
    if( e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL( e.target.files[0]);
      reader.onload=(event:any) => {
        this.url = event.target.result
        this.emitter.emit( this.url );
      }
    }

  }

}
