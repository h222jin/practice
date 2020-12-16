import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {JsonApiService} from "@app/core/services";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {numericIndexGetter} from "@swimlane/ngx-datatable/release/utils";
import {GatewayService} from "@app/features/_service/gateway.service";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'ea-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css', '../../../shared/ngx-datatable-css/smartadmin-ngx-datatable.css'],
  encapsulation: ViewEncapsulation.None
})

export class ManagementComponent implements OnInit {

  public searchOptions = {
    name: '',
    gender: '',
    group: '',
    company: '',
    position: ''
  }

  rows = [];
  temp = [];
  loadingIndicator: boolean = true;
  companies = [];
  companyList = [];
  people = [];
  genders = [];
  groups = [];
  groupList = [];
  positions = [];
  positionList = [];
  name: string;
  controls: any = {
    pageSize:  10,
    filter: '',
  }

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild(DatatableComponent) tableForV: DatatableComponent;
  @ViewChild('sendMessageTemplate') sendMessageTemplate;
  modalRef: BsModalRef;
  private messageData: any;

  constructor(
      private jsonApiService:JsonApiService,
      private router: Router,
      private modalService: BsModalService,
      private gatewayService: GatewayService
  ) {

  }

  ngOnInit() {

    this.jsonApiService.fetch('/_testData/test.json').subscribe(data=> {

      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
      this.loadingIndicator = false

      console.log(this.rows);

      for (let row of this.rows) {
          this.companies.push(row.company);
          this.people.push(row.gender);
          this.groups.push(row.groupName);
          this.positions.push(row.position);
      }
      this.companyList = this.companies.filter(
          (item, idx, array) => { return array.indexOf( item ) == idx; }
      )
      this.genders = this.people.filter(
          (item, idx, array) => { return array.indexOf( item ) == idx; }
      )
      this.groupList = this.groups.filter(
          (item, idx, array) => { return array.indexOf( item ) == idx; }
      )
      this.positionList = this.positions.filter(
          (item, idx, array) => { return array.indexOf( item ) == idx; }
      )
    })
  }

  openMmsTemplate() {
    this.modalRef = this.modalService.show(this.sendMessageTemplate);
  }

  //
  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //   // filter our data
  //   const temp = this.temp.filter(function(d) {
  //     return !val || ['id', 'userName', 'phone', 'company', 'zip', 'city', 'date'].some((field: any)=>{
  //       return d[field].toLowerCase().indexOf(val) !== -1
  //     })
  //   });
  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }

  sendMessageData($event) {
    this.messageData = $event.target.value;
  }

  sendMessage() {
    this.gatewayService.postSendMessage(this.messageData)
        .subscribe(res => {
          this.modalRef && this.modalRef.hide()
        })


  }

}



