import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/toker-storage.service';


export interface IUser {
    email: string,
    password:string
  };

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
  })
export class LoginComponent {


    form: any = {
        username: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    user:IUser = {email:'',password:''};
    email ='';
    password = '';

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

    // email = new FormControl('', [Validators.required, Validators.email]);
    

    // getErrorMessage() {
    //     if (this.email.hasError('required')) {
    //         return 'You must enter a value';
    //     }

    //     return this.email.hasError('email') ? 'Not a valid email' : '';
    // }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }

    onSubmit(): void {
        const { username, password } = this.form;
        this.authService.login(this.user.email, this.user.password).then((userCredential: any) => {
            // console.log(userCredential);
            // Signed in 
            const user = userCredential.user;
            this.tokenStorage.saveToken(userCredential.user.stsTokenManager);
            this.tokenStorage.saveUser(userCredential);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            // this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        })
        .catch((error: any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            this.isLoginFailed = true;
        });
    }

    reloadPage(): void {
        this.router.navigate(['/']);
        // window.location.reload();
    }
}   