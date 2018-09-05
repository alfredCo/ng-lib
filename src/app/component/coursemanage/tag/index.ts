import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {
    FormBuilder,
    FormGroup
    } from '@angular/forms';
@Component({
  selector: 'settings-page',
  templateUrl: "./index.html"
})
export class TagComponent {
  data = [];
  loading = true;
  myForm: FormGroup;
  constructor(private http:Http,fb:FormBuilder){
    this.myForm = fb.group({
        number:[345]
    })
  }
  createItem(){
    this.http.request('http://192.168.131.15:8093/ailab-manager/v1/front/curriculumPath/count').subscribe((res:Response)=>{
      console.log(res);
      this.data = res.json().data.data;
      this.loading = true;
    })
  }
  onSubmit(val){
      console.log(val)
  }
  tag = 'is tag';
}
