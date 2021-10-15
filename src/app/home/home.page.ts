import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);

      if (user) {
        const isEmailVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isEmailVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle(email, password) {
    try {
      const user = await this.authSvc.loginGoogle();

      if (user) {
        const isEmailVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isEmailVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['/bibliografias']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
