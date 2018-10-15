import { Injectable } from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
@Injectable()
export class InterceptorService implements HttpInterceptor{
 
  intercept(req:HttpRequest<any>,next:HttpHandler){
    var url = 'http://172.16.2.100:30093/'
    const authReq = req.clone({
      url: (url+req.url)  //对任意请求的url添加token参数
    });
 
    return next.handle(authReq);
  }
}