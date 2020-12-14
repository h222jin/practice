import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ea-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {

  }


  signup(event) {
    event.preventDefault();
    this.router.navigate(['/auth/signIn']);

  }
}
