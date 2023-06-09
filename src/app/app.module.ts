import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './login/admin/create-user/create-user.component';
import { DonationComponent } from './login/admin/donation/donation.component';
import { PaymentComponent } from './login/user/payment/payment.component';
import { ProfileComponent } from './login/user/profile/profile.component';
import { AdminComponent } from './login/admin/admin.component';
import { UserComponent } from './login/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    DonationComponent,
    PaymentComponent,
    ProfileComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
