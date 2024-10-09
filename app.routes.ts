import { Routes } from '@angular/router';
import { AddObjektComponent } from './add-object/add-objekt.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OmOssComponent } from './om-oss/om-oss.component';


export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-object', component: AddObjektComponent },
  { path: 'om-oss', component: OmOssComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
