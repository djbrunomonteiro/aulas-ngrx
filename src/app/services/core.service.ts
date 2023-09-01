import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu';

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

  constructor() { }
}
