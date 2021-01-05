import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Booking} from "@app/features/meeting-room/booking";
import {BookingService} from "@app/features/meeting-room/booking.service";

@Component({
    selector: 'ea-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['../../shared/ngx-datatable-css/smartadmin-ngx-datatable.css'],
    encapsulation: ViewEncapsulation.None
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
        this.items = bookings.filter(it => it.status)
    }


}
