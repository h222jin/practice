import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Booking} from "@app/features/meeting-room/booking";

@Injectable()
export class BookingService {

    public subject:Subject<any>;

    public bookings: Array<Booking> = [
        new Booking('1','available','sun-ho','2021 planning'),
        new Booking('2','booked', 'daniel', '2020 Ending')
    ];

    states = [
        {name: "available", title: "booking available", icon: "exclamation"},
        {name: "booked", title: "booked", icon: "warning"}
    ];

    constructor() {
        this.subject = new Subject();
    }

    createBooking(booking:Booking) {

    }

    updateBooking(id, state) {

    }
    deleteBooking(id, state) {

    }

}
