import { Component } from '@angular/core';
import {TagService} from './tag.service';
import {Observable} from "rxjs/internal/Observable";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    AbstractControl
    } from '@angular/forms';
@Component({
  selector: 'settings-page',
  templateUrl: "./index.html"
})
export class TagComponent {
  data = [];
  loading = true;
  myForm: FormGroup;
  //tagService:TagService;
  constructor(fb:FormBuilder,private tagService:TagService){
    this.myForm = fb.group({
        number:[345,Validators.compose([Validators.required,this.numberVal])]
    })
    //this.tagService = TagService;
  }
  createItem(){
    this.tagService.getTags().subscribe((res)=>{
      console.log(res);
      //this.data = res.json().data.data;
      this.loading = true;
    })
  }
  onSubmit(form,val){
      console.log(form,val)
  }
  numberVal(val:FormControl){
    var reg = /^[1-9]\d*$/;
    if(!reg.test(val.value)){
      return {noNum:true}
    }
  }
}
