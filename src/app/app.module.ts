import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HomelivingComponent } from './homeliving/homeliving.component';
import { IndianwearComponent } from './indianwear/indianwear.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WesternwearComponent } from './westernwear/westernwear.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'women', component: WomenComponent, 
    children: [
      {path: 'indianwear', component: IndianwearComponent},
      {path: 'westernwear', component: WesternwearComponent}
    ]
  },
  { path: 'Men', component: MenComponent },
  { path: 'Kids', component: KidsComponent },
  { path: 'Homeliving', component: HomelivingComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', component: HomepageComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    HomelivingComponent,
    IndianwearComponent,
    LoginComponent,
    DashboardComponent,
    WesternwearComponent,
    HomepageComponent,
    RegisterComponent,
    CartComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
