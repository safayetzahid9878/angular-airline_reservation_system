import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './addFlight/flight.component';
import { TicketComponent } from './manageCustomer/ticket.component';
import { RouterModule } from '@angular/router';


import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { CreateAirComponent } from './create-air/create-air.component';
import { CreateRootComponent } from './create-root/create-root.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AddPlaneComponent } from './add-plane/add-plane.component';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { PlanedetailsComponent } from './planedetails/planedetails.component';
import { AirdetailsComponent } from './airdetails/airdetails.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    FlightComponent,
    TicketComponent,


    BookTicketComponent,
    TicketDetailsComponent,
    HeaderComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    AddLocationComponent,
    CreateAirComponent,
    CreateRootComponent,
    AddClassComponent,
    AddPlaneComponent,
    UserloginComponent,
    UsersignupComponent,
    PlanedetailsComponent,
    AirdetailsComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [

        {
          path: "contact",
          component: ContactComponent
        },
        {
          path: "home",
          component: HomeComponent
        },
        {
          path: "signup",
          component: SignupComponent
        },
        {
          path: "login",
          component: LoginComponent
        },

        {
          path: "booknow",
          component: BookTicketComponent,
          
        },
        {
          path: 'ticketdetails',
          component: TicketDetailsComponent
        },

       

        {
          // dashBord + childreen
          path: "mcust",
          component: TicketComponent,
          children: [

            {
              path: 'addPlane',
              component: AddPlaneComponent
            },


            {
              path: "addClass",
              component: AddClassComponent
            },
            {
              path: "addLocation",
              component: AddLocationComponent
            },

            {
              path: "createAir",
              component: CreateAirComponent
            },
            {
              path: "planeDetails",
              component: PlanedetailsComponent
            },
            {
              path: "airdetails",
              component: AirdetailsComponent
            },
             {
              path: 'userlogin',
              component: UserloginComponent
            },
          ]
        },
        
      ])
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
