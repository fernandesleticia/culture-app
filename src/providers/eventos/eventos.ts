import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventosProvider {

  private API_URL = 'https://restapiforappcultura.herokuapp.com/';
 


  constructor(public http: Http) {
   
  }


  getAllEventos(){
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + 'eventos';
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }




  get(id: number) {

    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'eventos/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
          console.log(id);
        },
        (error) => {
          reject(error.json());
        });
    });
   
  }

}
