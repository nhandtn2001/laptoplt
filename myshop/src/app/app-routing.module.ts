import { ContactComponent } from './components/contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent},

  {path:'Menu',component:MenuComponent},

  {path: 'About',component:AboutComponent},

  {path: 'Contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
