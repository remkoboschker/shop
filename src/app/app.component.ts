import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase, public auth: AngularFireAuth, private router: Router) {
    this.items = db.list('/items');
    this.user = auth.authState;
      this.user.subscribe(auth => { 
      if(!auth) {
        this.router.navigateByUrl('/login');
      }
    })
  }
  logout(){
    this.auth.auth.signOut();
  }
}
