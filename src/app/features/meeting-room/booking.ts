export class Booking {
    id: string;
    roomName: string;
    agenda: string;
    leader: string;
    startDate: any;
    endDate: any;
    state: string;
    hours: number;
    static _id = 0;

    constructor(roomName?, state?, leader?, agenda?, hours?, startDate?, endDate?) {
        this.id = '' + Booking._id++;
        this.roomName = roomName;
        this.agenda = agenda;
        this.leader = leader;
        this.state = state;
        this.startDate = startDate;
        this.endDate = endDate;
        this.hours = hours;
    }
}
