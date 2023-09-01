import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  menu: IMenu[] = [ 
    {
      titulo: 'Instalação',
      url: 'instalacao'
    },
  ]

  constructor(private http: HttpClient) { }

  getMarkdown(url: string){
    return this.http.get(url)
  }
}
