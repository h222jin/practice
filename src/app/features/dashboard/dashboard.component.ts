import {Component, OnInit} from '@angular/core';
import set = Reflect.set;

@Component({
    selector: 'ea-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tower: any = [
        {
            "name": "1F",
            "action": false,
            "status": "none"
        },
        {
            "name": "2F",
            "action": false,
            "status": "none"
        }, {
            "name": "3F",
            "action": false,
            "status": "none"
        }
    ];

    building = []
    action: boolean;


    clicked: boolean = true;

    constructor() {
    }

    ngOnInit() {
        // 층 오름차순 정렬
        this.tower.sort(function (a, b) {
            console.log(a);
            console.log(b);
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            if (a.name === b.name) return 0;
        });


        for (let i = 1; i < 20; i++) {
            this.building.push([i])
        }
    }

    click(floor) {
        this.action = true;
        console.log(floor)


    }

    change(layer) {
        layer.status = "alert";
        this.clicked = false
        layer.action = true;
        new Promise(() => {
            setTimeout(() => {
                layer.status = "none";
                this.clicked = true;
                layer.action = false;
            }, 1000)
        })

    }
}
