import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { PasswordComponent } from './components/password/password.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutingModule } from './components/admin/admin.rounting.component';
import { ListingComponent } from './components/listing/listing.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddmonComponent } from './components/addmon/addmon.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    PasswordComponent,
    AdminComponent,
    ListingComponent,
    BookingComponent,
    AddmonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
