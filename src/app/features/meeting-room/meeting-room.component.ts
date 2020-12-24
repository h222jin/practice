import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

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


  saveInfo = [];
  public validationOptions = {
    rules : {
      name : {
        required : true
      },
      email : {
        required : true,
        email : true
      },
      phone : {
        required : true
      },
      country : {
        required : true
      },
    },

    // Messages for form validation
    messages : {
      name : {
        required : 'Please enter your last name'
      },
      email : {
        required : 'Please enter your email address',
        email : 'Please enter a VALID email address'
      },
      phone : {
        required : 'Please enter your phone number'
      },
      country : {
        required: 'Please select your country'
      }
    },
    submitHandler: this.onSubmit

  };

  constructor(
      private modalService: BsModalService
  ) { }

  ngOnInit() {
  }


  booking() {
    this.bookingTemplate = true;
  }

  save(event) {
    this.saveInfo.push(event.target.value)
    this.bookingTemplate = false;
  }

  onSubmit(){
    console.log('\n', 'submit handler for validated form', '\n\n')
  }
}
