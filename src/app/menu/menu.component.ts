import { Component } from '@angular/core';
import { CoreService } from '../services/core.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class MenuComponent {

  constructor(public core: CoreService){
  }

}
