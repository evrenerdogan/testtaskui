import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseHttpService} from './base-http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CacheService} from "../cache.service";
import {UploadFilePost} from "../../models/post/file/upload-file.post";
import {ResponseModel} from "../../models/response/response.model";

@Injectable({ providedIn: 'root' })

export class FileService extends BaseHttpService {
  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _cacheService: CacheService
  ) {
    super(_router, _http, _cacheService);
  }

  upload(post: UploadFilePost ): Observable<ResponseModel<any>> {
    return this.postAPI<any>("uploads", post);
  }

  list()
  {
    return this.postAPI<any>("uploads/list", {});
  }


}
