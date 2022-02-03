import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/api/facebook-clone/';
  tokens : any;

   constructor ( private http: HttpClient) { }

   user ( ) {
    const token = 'Bearer '+this.token.getToken();
    this.tokens += token;
    const httpOptions = {
      headers: new HttpHeaders( { 'Authorization': this.tokens } )
    };
    return this.http.get( this.baseUrl , httpOptions ).pipe ( );
  }

   registerUser ( details : any) {
    this.tokens += this.token.getToken ( );
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': this.tokens })
    };
    return this.http.post('http://localhost:3000/register', details);
  }
}
