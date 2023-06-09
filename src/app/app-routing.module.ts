import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './login/admin/admin.component';
import { CreateUserComponent } from './login/admin/create-user/create-user.component';
import { DonationComponent } from './login/admin/donation/donation.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './login/user/payment/payment.component';
import { ProfileComponent } from './login/user/profile/profile.component';
import { UserComponent } from './login/user/user.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
   path:'user',
   component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'admin/createUser',
    component:CreateUserComponent
  },
  {
    path:'admin/donation',
    component:DonationComponent
  },
  {
    path:'user/payment',
    component:PaymentComponent
  },
  {
    path:'user/profile',
    component:ProfileComponent
  }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
