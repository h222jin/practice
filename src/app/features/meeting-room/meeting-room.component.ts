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

    public newBooking: Booking;

    public states: Array<any>;
    public items: Array<Booking> = [];

    constructor(
        private bookingService: BookingService
    ) {
        this.states = this.bookingService.states
    }

    ngOnInit() {
        this.bookingService.subject.subscribe((bookings: Array<Booking>) => {
            console.log(bookings);
            this.setItems(bookings);
        })

        this.setItems(this.bookingService.bookings);
    }

    setItems(bookings: Array<Booking>) {
        this.items = bookings.filter(it => it.state == this.state);
    }


    createBooking() {
        if (this.newBooking.hours != null
            && this.newBooking.state != 'booked'
            && this.newBooking.startDate != null
            && this.newBooking.endDate != null
            && this.newBooking.leader != null
            && this.newBooking.roomName != null
            && this.newBooking.agenda != null) {
            this.bookingService.createBooking(this.newBooking);
            this.newBooking = null;
        } else {
            alert('정확히 입력해 주세요')
        }

    }

    booking() {
        // new booking 으로 init
        this.newBooking = new Booking();
        this.newBooking.state = 'available';
    }


}
