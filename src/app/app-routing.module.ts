import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'maps', component: MapComponent},
  {path: 'login', component: LoginPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
