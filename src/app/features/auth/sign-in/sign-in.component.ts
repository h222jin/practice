import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ea-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

    signIn(event) {
      event.preventDefault();
      this.router.navigate(['/home']);

    }

    signUp(event) {
      event.preventDefault();
      this.router.navigate(['/']);
    }
}
