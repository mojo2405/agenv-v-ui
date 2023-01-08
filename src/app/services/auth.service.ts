import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { environment } from 'src/environment/environment';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): any {
    const firebaseConfig = {
        apiKey: environment.apiKey,
        authDomain: environment.authDomain,
        projectId: environment.projectId,
        storageBucket: environment.storageBucket,
        messagingSenderId: environment.messagingSenderId,
        appId: environment.appId
    };
      
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, username, password);
  }
}