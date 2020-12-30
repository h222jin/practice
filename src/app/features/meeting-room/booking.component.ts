import {Component, Input, OnInit} from "@angular/core";
import {Booking} from "@app/features/meeting-room/booking";
import {BookingService} from "@app/features/meeting-room/booking.service";

@Component({
    selector: 'ea-booking',
    templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

    public items: Array<Booking> = [];

    constructor(
        private bookingService: BookingService
    ) {
    }

    ngOnInit() {
        this.bookingService.subject.subscribe( (bookings: Array<Booking>) => {
            this.setItems(bookings);
        })
        this.setItems(this.bookingService.bookings);
    }

    setItems(bookings: Array<Booking>) {
        this.items = bookings.filter(it => it.state)
    }


}
