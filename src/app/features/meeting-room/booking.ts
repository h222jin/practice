export class Booking {
    id: string;
    roomName: string;
    agenda: string;
    leader: string;
    startDate: any;
    endDate: any;
    state: string;
    static _id = 0;

    constructor(roomName?, state?, leader?, agenda?) {
        this.id = '' + Booking._id++;
        this.roomName = roomName;
        this.state = state;
        this.leader = leader;
        this.agenda = agenda;
        this.startDate = new Date();
        this.endDate = new Date();
    }
}
