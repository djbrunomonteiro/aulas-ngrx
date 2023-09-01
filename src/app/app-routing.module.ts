import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallComponent } from './aulas/install/install.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MenuComponent
  },
  {
    path: 'install',
    component: InstallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
