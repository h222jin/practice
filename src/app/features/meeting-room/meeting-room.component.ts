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

    validatorOptions = {
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            roomNo: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: '예약할 미팅룸 번호를 선택해 주세요'
                    }
                }
            },
            agenda: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: '회의 주제를 입력해 주세요'
                    }
                }
            },
            status: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: '미팅룸 상태를 확인해 주세요'
                    }
                }
            },
            startDate: {
                group: '.col-sm-4',
                validators: {
                    notEmpty: {
                        message: '원하는 예약 날짜를 확인해 주세요'
                    }
                }
            },
            endDate: {
                group: '.col-sm-4',
                validators: {
                    notEmpty: {
                        message: '원하는 예약 종료 날짜를 확인해 주세요'
                    }
                }
            },
            hours: {
                group: '.col-sm-4',
                validators: {
                    notEmpty: {
                        message: '원하는 사용 시간을 선택해 주세요'
                    },
                    regexp: {
                        message: '시간 단위로만 지정해 주세요'
                    }
                }
            }
        }

    };
    roomNumber = [1, 2, 3, 4, 5];
    status = ['booked', 'available']

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
        this.items = bookings.filter(it => it.status == this.state);
    }


    onSubmit() {

        if(!this.newBooking.roomNo || !this.newBooking.agenda
            || !this.newBooking.status || !this.newBooking.startDate
            || !this.newBooking.endDate || !this.newBooking.hours) {
            alert('정보를 모두 입력해주세요.')
            return;
        }
        this.bookingService.createBooking(this.newBooking);
        this.newBooking = null;

    }

    booking() {
        // new booking 으로 init
        this.newBooking = new Booking();
        this.newBooking.status = 'available';
        this.newBooking.roomNo = 1;
    }


}
