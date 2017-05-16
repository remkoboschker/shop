import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  user: Observable<firebase.User>;
  error: any;
    constructor(public afAuth: AngularFireAuth,private router: Router) {
      this.user = afAuth.authState;
      this.user.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/');
      }
    });
  }


  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
        (success) => {
        this.router.navigate(['/orders']);
    }).catch(
      (err) => {
      this.error = err;
    })
  }

  loginGithub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then(
        (success) => {
        this.router.navigate(['/orders']);
    }).catch(
      (err) => {
      this.error = err;
    })
  }

}
