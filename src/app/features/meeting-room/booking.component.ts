import {Component, Input, OnInit} from "@angular/core";
import {Booking} from "@app/features/meeting-room/booking";
import {BookingService} from "@app/features/meeting-room/booking.service";

@Component({
    selector: 'booking',
    templateUrl: './booking.component.html',
    styleUrls: []
})
export class BookingComponent implements OnInit {

    @Input() public state: any;

    bookingTrackFn = (i, booking) => booking.id;

    public newBooking: Booking;
    public states: Array<any>;
    public items: Array<Booking> = [];


    constructor(
        private bookingService: BookingService
    ) {
    }

    ngOnInit() {
        this.bookingService.subject.subscribe( (bookings: Array<Booking>) => {
            this.setItems(bookings);
            console.log('on in it : ', bookings);
        })

        this.setItems(this.bookingService.bookings);

    }

    setItems(bookings: Array<Booking>) {
        this.items = bookings.filter(it => it.state == this.state)
    }

    createBooking() {
        this.bookingService.createBooking(this.newBooking);
        this.newBooking = null;
    }

    booking() {
        // new booking 으로 init
        this.newBooking = new Booking();
    }

}
