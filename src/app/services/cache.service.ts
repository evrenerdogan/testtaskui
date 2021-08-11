import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)


export class CacheService {

  public readonly apiUrlKey = "apiUrl";
  constructor() {}

  public setItem(key: string, value: object)
  {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public hasItem(key: string)
  {
    return localStorage.getItem(key) ? true : false;
  }

  public removeItem(key: string)
  {
    localStorage.removeItem(key);
  }

  public getItem(key: string)
  {
    return this.hasItem(key) ? JSON.parse(<string>localStorage.getItem(key)) : null;
  }

  setApiUrl(data: any)
  {
    if (data)
    {
      this.setItem(this.apiUrlKey, environment.production ? data.prodUrl : data.testUrl);
    }
  }
}
