import { Component, OnInit } from '@angular/core';
import {JsonApiService} from "@app/core/services";

@Component({
  selector: 'ea-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public chartjsData: any;

  constructor( private jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.jsonApiService.fetch('//graphs/chartjs.json').subscribe((data) => {
      this.chartjsData = data;
    })
  }

}
