import {Component, OnInit} from '@angular/core';
import {JsonApiService} from "@app/core/services";
import {isDateValid} from "ngx-bootstrap";

@Component({
    selector: 'ea-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



    temp = [];
    rows = [];
    companyList = [];
    companyFilter = [];
    registerMember = [];
    jsonData = [{
        "name": "kaclef",
        "gender": "male",
        "groupName": "soran",
        "company": "HappyRobot",
        "position": "vocal"
    }]

    public searchOptions = {
        company: ''
    }

    constructor(
        private jsonApiService: JsonApiService
    ) {
    }

    ngOnInit() {
        this.jsonApiService.fetch('/_testData/test.json')
            .subscribe(data => {
                this.temp = [...data];
                console.log(this.temp);

                this.rows = data;
                console.log(this.rows);

                for (let companies of this.temp) {
                    this.companyList.push(companies.company);
                }
                this.companyFilter = this.companyList.filter(
                    (item, idx, array) => { return array.indexOf( item ) == idx; }
                )


            })



    }

    onSubmit() {

    }

    getName(event) {
       this.jsonData[0].name = event.target.value
    }

    getGroup(event) {
        this.jsonData[0].groupName = event.target.value
    }

    getPosition(event) {
        this.jsonData[0].position = event.target.value
    }

    getCompany(event) {
        this.jsonData[0].company = event.target.value
    }

    getGender(event) {
        this.jsonData[0].gender = event.target.value
    }

    registerData() {
        this.jsonApiService.fetch('/_testData/test.json')
            .subscribe(data => {
                this.temp = [...data, this.jsonData];
                console.log(this.temp);
                }
            )
        return this.temp;
    }


}
