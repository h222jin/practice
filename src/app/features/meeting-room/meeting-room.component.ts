import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {UiDatepickerDirective} from "@app/shared/forms/input/ui-datepicker.directive";
import {JsonApiService} from "@app/core/services";

@Component({
  selector: 'ea-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css']
})
export class MeetingRoomComponent implements OnInit {

  @ViewChild("bookingTemplate") bookingTemplate;
  bsModalRef: BsModalRef;

  public options = {
    "ajax": 'assets/api/meeting-room.json',
    "iDisplayLength": 15,
    "columns": [
      {"data": "roomName"},
      {"data": "hours"},
      {"data": "members"},
      {"data": "status"},
      {"data": "starts"},
      {"data": "ends"}
    ],
    "order": [[1, 'asc']]
  }

  test = {
    "data" :
      {
        "roomName": "",
        "hours": "<td><div class='progress progress-xs' data-progressbar-value='100'><div class='progress-bar'></div></div></td>",
        "members": "",
        "status": "",
        "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
        "starts": "01-21-2013",
        "ends": "<strong>02-30-2018</strong>",
        "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
      }

  }
  public validationOptions = {
    rules : {
      name : {
        required : true
      },
      meetingRoomNumber : {
        required : true
      },
      agenda : {
        required : true
      },
    },

    // Messages for form validation
    messages : {
      name : {
        required : 'Please enter your name'
      },
      meetingRoomNumber : {
        required : 'Please enter room number'
      },
      agenda : {
        required: 'Please select your meeting agenda'
      }
    }
  };

  private temp: any[];
  private rows: any;
  private loadingIndicator: boolean;

  constructor(
      private modalService: BsModalService,
      private jsonApiService: JsonApiService
  ) { }

  ngOnInit() {

    
    this.jsonApiService.fetch('/meeting-room.json').subscribe(data => {
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
      this.loadingIndicator = false;
    })
    
    
  }

  booking() {
    this.bookingTemplate = true;
  }

  getRoomnumberFn(event: any) {
    this.test.data.status = event.target.value;

  }

  getNameFn(event: any) {
    this.test.data.members = event.target.value;
  }

  getAgendaFn(event: any) {
    this.test.data.roomName = event.target.value;
  }

  save() {
    console.log(this.test.data);
    this.rows.push(this.test.data);
    this.bookingTemplate = false;
   // this.jsonApiService.fetch('/meeting-room.json').subscribe(data => {
   //   data.columns.push(this.test.data);
   // })

  }
}
