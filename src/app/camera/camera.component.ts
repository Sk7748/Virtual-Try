import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})

export class CameraComponent {

  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';
  productId:any;
  category: any;
  showGoldImage:boolean=false;
  dimage :any;




  constructor(private renderer: Renderer2, private el: ElementRef, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.dimage = params['dimage'];
      this.category = params['category'];
    });
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    console.log(event);
    this.previewImage = event.imageAsDataUrl;
    this.btnLabel = 'Re capture image'
  }
  checkPermissions() {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 500,
        height: 500
      }
    }).then((res) => {
      console.log("response", res);
      this.stream = res;
      this.status = 'My camera is accessing';
      this.btnLabel = 'Capture image';
    }).catch(err => {
      console.log(err);
      if(err?.message === 'Permission denied') {
        this.status = 'Permission denied please try again by approving the access';
      } else {
        this.status = 'You may not having camera system, Please try again ...';
      }
    })
  }

  captureImage() {
    this.trigger.next();
  }

  clearImage() {
    this.previewImage = '';
    this.btnLabel = 'Capture image';
  }
  toggleGoldImage( ) {
    this.showGoldImage = !this.showGoldImage;
    
}

}
