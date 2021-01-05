export class Booking {
    id: string;
    roomNo: number;
    agenda: string;
    leader: string;
    startDate: any;
    endDate: any;
    status: string;
    hours: number;
    static _id = 0;

    constructor(roomNo?, status?, leader?, agenda?, hours?, startDate?, endDate?) {
        this.id = '' + Booking._id++;
        this.roomNo = roomNo;
        this.agenda = agenda;
        this.leader = leader;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.hours = hours;
    }
}
