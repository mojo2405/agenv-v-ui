import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firbase_env } from 'src/environment/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(username: string, password: string): any {
    const firebaseConfig = firbase_env;
      
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, username, password);
  }
}