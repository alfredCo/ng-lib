import { Component,Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
let url = 'ailab-manager/v1';
@Injectable()
export class TagService {
  //url = 'ailab-manager/v1/';
  //http;
  constructor(private http:HttpClient) {
    //this.http = HttpClient;
  }
  getTags(){
    return this.http.get(`${url}/front/curriculumPath/count`);
  }
}



