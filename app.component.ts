import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddObjektComponent } from './add-object/add-objekt.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OmOssComponent } from './om-oss/om-oss.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, RouterOutlet, AddObjektComponent, LoginComponent, OmOssComponent, HomeComponent, FooterComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
