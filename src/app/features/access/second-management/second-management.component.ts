import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {JsonApiService} from "@app/core/services";
import {Router} from "@angular/router";
import {GatewayService} from "@app/features/_service/gateway.service";

@Component({
  selector: 'ea-second-management',
  templateUrl: './second-management.component.html',
  styleUrls: ['./second-management.component.css']
})
export class SecondManagementComponent implements OnInit {

  @Input() task: string
  @Input() week: string
  @Input() day: string

  public days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'];


  public demo1: any;
  public demo2: any;
  newData:any[];
  // public searchOptions = {
  //   name: '',
  //   gender: '',
  //   group: '',
  //   company: '',
  //   position: ''
  // }
  //
  // rows = [];
  // temp = [];
  // loadingIndicator: boolean = true;
  // companies = new Array();
  // companyList = new Array();
  // people = new Array();
  // genders = new Array();
  // groups = new Array();
  // groupList = new Array();
  // positions = new Array();
  // positionList = new Array();
  // name: string;
  // controls: any = {
  //   pageSize:  10,
  //   filter: '',
  // }
  //
  // @ViewChild(DatatableComponent) table: DatatableComponent;
  // @ViewChild(DatatableComponent) tableForV: DatatableComponent;
  // @ViewChild('sendMessageTemplate') sendMessageTemplate;
  // modalRef: BsModalRef;

  constructor(
      private jsonApiService: JsonApiService,
      private gatewayService: GatewayService
      // private jsonApiService:JsonApiService,
      // private router: Router,
      // private modalService: BsModalService
  ) {

  }

  ngOnInit() {

    this.jsonApiService.fetch('/ui-examples/tree-view.json').subscribe(data => {
      this.demo1 = data.demo1;
      this.demo2 = data.demo2;
    })

    // this.gatewayService.getTreeData()
    //     .subscribe( data => {
    //       this.demo1 = data.demo1;
    //       this.demo2 = data.demo2;
    //     })


  }

  add() {
    this.newData = [];
    this.newData.push(this.task, this.day);
    this.gatewayService.postTreeData(this.newData);
    console.log(this.newData);
  }

  changeLstener(payload) {
    console.log('change payload', payload)
  }


}
    // Init 에 들어갔떤 내용임
    // this.jsonApiService.fetch('/_testData/test.json').subscribe(data=> {
    //
    //   // cache our list
    //   this.temp = [...data];
    //
    //   // push our inital complete list
    //   this.rows = data;
    //   this.loadingIndicator = false
    //
    //   console.log(this.rows);
    //
    //   for (let row of this.rows) {
    //     this.companies.push(row.company);
    //     this.people.push(row.gender);
    //     this.groups.push(row.groupName);
    //     this.positions.push(row.position);
    //   }
    //   this.companyList = this.companies.filter(
    //       (item, idx, array) => { return array.indexOf( item ) == idx; }
    //   )
    //   this.genders = this.people.filter(
    //       (item, idx, array) => { return array.indexOf( item ) == idx; }
    //   )
    //   this.groupList = this.groups.filter(
    //       (item, idx, array) => { return array.indexOf( item ) == idx; }
    //   )
    //   this.positionList = this.positions.filter(
    //       (item, idx, array) => { return array.indexOf( item ) == idx; }
    //   )
    // })
