import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  isVisible = '';


  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const credentials = {
      username: this.username, 
      password: this.password
    }
   
    this.auth.login(credentials).subscribe(
      {
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', this.username);
          if(response.passwordExpired) {
            this.isVisible = "expired";
          }
          this.router.navigate(['/logging']);
        },
        error: (error) => {
          console.log(error.status)
          const httpStatus = error.error.httpStatus;
          if(error.status === 400) {
            this.isVisible = "credentials";
          }else if(error.status === 403) {
            this.isVisible = "locked";    
          }
        }
      }
    );
  }

}
