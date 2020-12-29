import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {UiDatepickerDirective} from "@app/shared/forms/input/ui-datepicker.directive";
import {JsonApiService} from "@app/core/services";
import {Booking} from "@app/features/meeting-room/booking";
import {BookingService} from "@app/features/meeting-room/booking.service";

@Component({
  selector: 'ea-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css']
})
export class MeetingRoomComponent implements OnInit {

  @ViewChild('bookingTemplate') bookingTemplate;

  @Input() public state: any;

  bookingTrackFn = (i, booking) => booking.id;

  public newBooking: Booking;
  public states: Array<any>;
  public items: Array<Booking> = [];

  rows =[];

  constructor(
      private bookingService: BookingService
  ) {
    this.states = this.bookingService.states
  }

  ngOnInit() {

    this.bookingTemplate = false;
    this.bookingService.subject.subscribe( (booking: Array<Booking>) => {
      this.setItems(booking);
    })
    this.setItems(this.bookingService.bookings);

  }

  setItems(bookings: Array<Booking>) {
    this.items = bookings.filter(it => it.state == this.state)
  }

  createBookking() {
    this.bookingService.createBooking(this.newBooking);
    this.newBooking = null;
  }

  booking() {
    // new booking 으로 init
    this.newBooking = new Booking();
   //this.bookingTemplate = true;
  }

}
