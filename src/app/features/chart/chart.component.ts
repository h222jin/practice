import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {JsonApiService} from "@app/core/services";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {isJsObject} from "@angular/core/src/change_detection/change_detection_util";
import {count} from "rxjs/operators";

@Component({
    selector: 'ea-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {

    @ViewChild(DatatableComponent) table: DatatableComponent;


    public chartjsData: any;
    public pieData: any;

    rows = [];
    temp = [];
    labels = [];


    searchWord = [];

    names = [];
    positions = [];
    offices = [];
    ages = [];
    dates = [];
    salaries = [];

    nameList = [];
    positionList = [];
    officeList = [];
    ageList = [];
    dateList = [];
    salaryList = [];


    countData = [];
    result = [];
    reorderable: boolean = true;
    loadingIndicator: boolean = true;

    public searchOptions = {
        name: '',
        position: '',
        office: '',
        age: '',
        date: '',
        salary: ''
    }

    controls: any = {
        pageSize: 10,
        filter: '',
    }

    columns = [
        {name: 'name'},
        {name: 'position'},
        {name: 'office'},
        {name: 'age'},
        {name: 'date'},
        {name: 'salary'},

    ];

    constructor(private jsonApiService: JsonApiService) {
    }

    ngOnInit() {
        this.jsonApiService.fetch('/graphs/linechartData.json').subscribe((data) => {
            this.chartjsData = data;
        })

        this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data => {
            // cache our list
            this.temp = [...data];
            // push our inital complete list
            this.rows = data;
            this.loadingIndicator = false;
        })

        this.jsonApiService.fetch('/graphs/pieData.json').subscribe((data) => {
            this.pieData = data;
        })

        this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data => {
            // 인적사항 가져옴
            this.temp = [...data];

            // 검색 옵셧 세팅

            for (let row of this.temp) {
                this.positions.push(row.position)
                this.offices.push(row.office)
                this.ages.push(row.age)
                this.salaries.push(row.salary)

            }
            this.positionList = this.positions.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )
            this.officeList = this.offices.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )
            this.ageList = this.ages.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )
            this.salaryList = this.salaries.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )


            for (let item in this.countData) {
                this.result.push(item);
            }

            console.log('result :: ',this.result);
            console.log('countData :: ',this.countData);


        })

    }

    updateFilter(event) {
        const val: string = event.target.value.toLowerCase();

        const temp = this.temp.filter(function (d) {
            return !val || ['name', 'position', 'office', 'age', 'date', 'salary'].some((field: any) => {
                return d[field].toLowerCase().indexOf(val) !== -1
            })
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    searchSetting(event){
        this.searchWord.push(event.target.value)
        console.log(this.searchWord);
    }

    search() {
        const val = this.searchWord;
        const temp = this.temp.filter(function (d) {
            console.log('val ::' , val);
            return !val || ['name', 'position', 'office', 'age', 'date', 'salary'].some((field: any) => {
                return d[field].indexOf(val) !== -1
            })
        });
        this.rows = temp;
        this.table.offset = 0;

    }




    updatePageSize(value) {

        if (!this.controls.filter) {
            // update the rows
            this.rows = [...this.temp];
            // Whenever the filter changes, always go back to the first page
            this.table.offset = 0;
        }

        this.controls.pageSize = parseInt(value)

        this.table.limit = this.controls.pageSize;

        window.dispatchEvent(new Event('resize'));

    }

}
