import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Booking} from "@app/features/meeting-room/booking";

@Injectable()
export class BookingService {

    public subject:Subject<any>;

    public bookings: Array<Booking> = [
        new Booking('1','available','sun-ho','2020 plan',3,'2020-12-10','2020-12-11'),
        new Booking('2','booked','daniel','2020 plan',2,'2020-12-20','2020-12-12')
    ];

    states = [
        {name: "available", title: "booking available"},
        {name: "booked", title: "booked"}
    ];

    constructor() {
        this.subject = new Subject();
    }

    createBooking(booking:Booking) {
        this.bookings.push(booking);
        console.log('service: ',booking);
        this.subject.next(this.bookings);

    }

}
