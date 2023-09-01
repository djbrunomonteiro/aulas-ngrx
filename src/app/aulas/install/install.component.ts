import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent {

  src = '';

  constructor(private core: CoreService){
    this.core.getMarkdown('/install').subscribe(res =>{
      console.log(res);
      // this.src = res
      
    })
  }



}
