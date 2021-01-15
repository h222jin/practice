import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'ea-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Cars: any[] = [
    {
      "name": "BMW",
      "average": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  tower:any = [
    {
      "name": "3F",
      "action": false,
      "status": "none"
    },
    {
      "name": "2F",
      "action": false,
      "status": "none"
    },{
      "name": "1F",
      "action": false,
      "status": "none"
    }
  ];

  building= []
  action: boolean;

  first: boolean;
  second: boolean;
  third: boolean;
  forth: boolean;
  fifth: boolean;
  sixth: boolean;
  seventh: boolean;
  eighth: boolean;
  ninth: boolean;
  tenth: boolean;

  clicked: boolean = true;

  constructor() { }

  ngOnInit() {
    this.tower.sort();

    for(let i=1; i<20; i++) {
      this.building.push([i])
    }
  }

  click(floor){
    this.action = true;
    console.log(floor)

    switch (floor) {
      case 1: this.first = true; break
      case 2: this.second = true;break
      case 3: this.third = true;break
      case 4: this.forth = true;break
      case 5: this.fifth = true;break
      case 6: this.sixth = true;break
      case 7: this.seventh = true;break
      case 8: this.eighth = true;break
      case 9: this.ninth = true;break
      case 10: this.tenth = true;break
      default: break;
    }
    new Promise(() => {
      setTimeout(() => {
        this.action = false;
        this.first = false
        this.second = false
        this.third = false
        this.forth = false
        this.fifth = false
        this.sixth = false
        this.seventh = false
        this.eighth = false
        this.ninth = false
        this.tenth = false
      }, 1000)
    }).then (() =>{})


  }

  change(layer) {
    layer.status = "alert";
    this.clicked = false
    layer.action = true;
    new Promise(()=>{
      setTimeout(()=>{
        layer.status = "none";
        this.clicked = true;
        layer.action = false;
      }, 1000)
    })

  }
}
