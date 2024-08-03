import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path:'', component: HomeComponent,title:'Home'},
    {path: 'about', component: AboutComponent,title:'About'},
    {path: 'contact-us', component: ContactUsComponent,title:'Contact Us'},
    {path: 'login', component: LoginComponent,title:'Login'},
    {path: 'products', component: ProductsComponent,title:'Products'},
    {path: 'view/:id', component: ViewComponent},
    {path: '**', component:NotFoundComponent,title:'Page Not Found'},
];
