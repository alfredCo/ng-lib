import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'settings-page',
  template: `
    <div class="page-inner">{{tag}}
      <div class="table-action">
        <button type="button" (click)="createItem()" class="btn btn-primary">
          <i class="icon-aw-add-to2"></i>新建标签
        </button>
        <button type="button" [disabled]="!canEdit" (click)="createItem('edit')" class="btn btn-info">
            <i class="icon-aw-modify"></i>编辑
        </button>
        <button type="button" [disabled]="!canDel" (click)="deleteItem(checkedItems)" class="btn btn-info">
          <i class="icon-aw-delete"></i>删除
        </button>
      </div>
      <div>
        <table *ngIf="loading">
          <tr>
            <th>123</th>
            <th>123</th>
            <th>123</th>
          </tr>
          <tr *ngFor="let item of data">
            <td>{{item.id}}</td>
            <td>{{item.pathName}}</td>
            <td>{{item.routeDescription}}</td>
          </tr>
        </table>
      </div>
    </div>
  `
})
export class TagComponent {
  data = [];
  loading = true;
  constructor(private http:Http){

  }
  createItem(){
    this.http.request('http://192.168.131.15:8093/ailab-manager/v1/front/curriculumPath/count').subscribe((res:Response)=>{
      console.log(res);
      this.data = res.json().data.data;
      this.loading = true;
    })
  }
  tag = 'is tag';
}
