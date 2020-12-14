import {Component, OnInit} from '@angular/core';
import {JsonApiService} from "@app/core/services";

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

}
