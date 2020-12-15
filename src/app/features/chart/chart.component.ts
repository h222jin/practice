import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {JsonApiService} from "@app/core/services";
import {DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'ea-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;


  public chartjsData: any;
  public pieData: any;

  rows = [];
  temp = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  controls: any = {
    pageSize:  10,
    filter: '',
  }

  columns = [

    { prop: 'name' },
    { name: 'id' },
    { name: 'name' },
    { name: 'phone' },
    { name: 'Company' },
    { name: 'zip' },
    { name: 'city' },
    { name: 'date' }
  ];

  constructor( private jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.jsonApiService.fetch('/graphs/linechartData.json').subscribe((data) => {
      console.log('받자마자 데이터 ', data);
      this.chartjsData = data;
      console.log('chart data', this.chartjsData);
    })

    this.jsonApiService.fetch('/graphs/pieData.json').subscribe((data) => {
      console.log('받자마자 데이터 ', data);
      this.pieData = data;
      console.log('chart data', this.pieData);
    })

    this.jsonApiService.fetch('/tables/datatables.standard.json').subscribe(data=> {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
      console.log(this.rows);
      this.loadingIndicator = false;
    })

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return !val || ['id', 'name', 'phone','company','zip','city','date'].some((field: any)=>{
        return d[field].toLowerCase().indexOf(val) !== -1
      })
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  updatePageSize(value) {

    if(!this.controls.filter){
      // update the rows
      this.rows = [...this.temp];
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }

    this.controls.pageSize = parseInt(value)

    this.table.limit = this.controls.pageSize;

    window.dispatchEvent(new Event('resize'));

  }
  
}
