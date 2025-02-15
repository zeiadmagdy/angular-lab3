import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from "./products/products.component";
import { ViewComponent } from './view/view.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoginComponent, ProductsComponent,ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';

}
