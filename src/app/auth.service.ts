import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  isAuthenticated: boolean;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user = auth.authState;
    this.user.subscribe(auth => { this.isAuthenticated = !!auth });
  }
}
