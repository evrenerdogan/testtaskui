import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, PRIMARY_OUTLET, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ResponseModel} from "src/app/models/response/response.model";
import {CacheService} from "../cache.service";

@Injectable({ providedIn: 'root' })

export class BaseHttpService {

  public apiUrl: string;
  userInfo: any;
  userInfoKey = 'user';

  constructor(
    private router: Router,
    private http: HttpClient,
    private cacheService: CacheService
  ) {}

  // api request main method
  postAPI<T>(module: string, postData: any = {}): Observable<ResponseModel<T>> {
    this.apiUrl = this.cacheService.getItem(this.cacheService.apiUrlKey);
    const postString = postData ? JSON.stringify(postData) : '{}';
    let r = this.http.post<ResponseModel<T>>(this.apiUrl + module, postString, this.jwt()).pipe(
      map( value => {
        return value;
      }),
      catchError(err => {
        return of<ResponseModel<T>>({
          type: "http",
          status: false,
          description: 'Connection Error'
        });
      })
    );
    return r;
  }


  public jwt(): object {
    this.userInfo = JSON.parse(<string>localStorage.getItem(this.userInfoKey));
    let obj: any = {'Content-Type': 'application/json'};
    let headers = new HttpHeaders(obj);
    return {headers: headers};
  }

  getApiUrlFromJson(): () => Promise<any>
  {
    return () => this.http.get('/environment.json').toPromise().then(
      data => {
        this.cacheService.setApiUrl(data);
        return true;
      }
    );
  }

}
