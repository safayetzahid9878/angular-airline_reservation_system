
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    url ="http://localhost:3000/admin";
    airUrl = "http://localhost:3000/createair";
    url3 = "http://localhost:3000/addplane";
    routeUrl = "http://localhost:3000/route";
    locUrl= "http://localhost:3000/location";
    classUrl = "http://localhost:3000/class";
   bookUrl = "http://localhost:3000/bookticket";


  constructor(private http : HttpClient) { }
   //form registration.....................................
  registrationUser(data){
    this.http.post(this.url, {
      name :data.name,
      username : data.username,
      password : data.password
    }).toPromise();
  }

  logSubmit(data){
    return this.http.get(this.url);
  }

  //air Service...............................................
  airSUb(data){
    this.http.post(this.airUrl, {
      airname :data.airname,
      airRout : data.airRout,
      model : data.model,
      devision: data.devision
    }).toPromise();
  }

  getUser(){
    return this.http.get(this.airUrl)
  }
  airUpdate(user){
   return this.http.put(this.airUrl+'/' + user.id, user)
  }

  deleteAir(user){
   return this.http.delete(this.airUrl+'/'+ user.id);
  }


// Plane Service.....
  planeSub(data){
    this.http.post(this.url3, {
      plname :data.plname,
      engine : data.engine,
      model : data.model,
      countri: data.countri
    }).toPromise();
  }

  getPlane(){
    return this.http.get(this.url3)
  }
  updatePlane(user){
   return this.http.put(this.url3+'/' + user.id, user)
  }

  deletePlane(user){
   return this.http.delete(this.url3+'/'+ user.id);
  }

   // Route Service..... 
   createRoute(data){
    this.http.post(this.routeUrl, {
      rootcode :data.rootcode,
      place : data.place,
      source : data.source,
      departure: data.departure
    }).toPromise();
  }

  dataForm(){
    return this.http.get(this.routeUrl);
  }

  // Location Service..... 

  createLocation(data){
    this.http.post(this.locUrl, {
      latitude :data.latitude,
      longitude : data.longitude,
      place : data.place,
      divition: data.divition
    }).toPromise();

  }
  getLocation(){
    return this.http.get(this.locUrl);
  }

    // Clasas Service..... 

  createClass(data){
    this.http.post(this.classUrl, {
      classCode :data.classCode,
      class : data.class
    }).toPromise();

  }
  getClass(){
    return this.http.get(this.classUrl);
  }


// bookTicket Service..... 

  ticketBook(data){
  this.http.post(this.bookUrl, {

    from :data.from,
    to : data.to,
    class :data.class,
    airname : data.airname,
    date : data.date,
    seats : data.seats,
    price : data.price,
    seatNumber: data.seatNumber
  }).toPromise();

}
getTicket(){
  return this.http.get(this.bookUrl);
}


}
