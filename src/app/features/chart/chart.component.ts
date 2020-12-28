import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {JsonApiService} from "@app/core/services";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {isJsObject} from "@angular/core/src/change_detection/change_detection_util";
import {count} from "rxjs/operators";
import {enableBindings} from "@angular/core/src/render3";

@Component({
    selector: 'ea-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css','../../shared/ngx-datatable-css/smartadmin-ngx-datatable.css'],
    encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    public linechartData: any;
    public pie_chart1: any;
    public pie_chart2: any;

    rows = [];
    temp = [];
    labels = [];

    searchWord = [];
    searchCate = [];

    names = [];
    offices = [];
    officeList = [];
    ages = [];
    ageList = [];
    ageCount = [];
    chart:boolean = false;

    reorderable: boolean = true;
    loadingIndicator: boolean = true;

    public searchOptions = {
        office: '',
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

    countData: any[];
    loadingIndicatorForV: boolean = true;

    constructor(private jsonApiService: JsonApiService) {
    }

    ngOnInit() {

        this.jsonApiService.fetch('/graphs/pieData.json').subscribe((data) => {
            this.pie_chart1 = data;

        })

        this.jsonApiService.fetch('/graphs/linechartData.json').subscribe((data) => {
            this.linechartData = data;
        })

        this.jsonApiService.fetch('/graphs/doughnutData.json').subscribe((data) => {
            this.pie_chart2 = data;
        })

        this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data => {
            // cache our list
            this.temp = [...data];
            // push our inital complete list
            this.rows = data;
            this.loadingIndicator = false;

            for (let row of this.temp) {
                this.offices.push(row.office)
                this.ages.push(row.age)
            }
            this.officeList = this.offices.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )
            this.officeList.sort();

            this.ageList = this.ages.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )
            this.officeList.sort();

            this.countData = this.offices.reduce( (acc, cur) => {
                acc.set(cur, (acc.get(cur) || 0 ) + 1);
                return acc
            } , new Map ());

            this.ageCount = this.ages.reduce( (acc, cur) => {
                acc.set(cur, (acc.get(cur) || 0 ) + 1);
                return acc
            } , new Map ());


            for ( let [key, value] of this.ageCount.entries()) {
                console.log('key: ', key , 'value : ', value);
                this.pie_chart2.datasets[0].data.push(value)
                this.pie_chart2.labels.push(key)
            }


            for ( let [key, value] of this.countData.entries()) {
                console.log('key: ', key , 'value : ', value);
                this.pie_chart1.datasets[0].data.push(value)
                this.pie_chart1.labels.push(key)
            }

            this.chart = true;

        })



    }



    searchSetting(event){
        if( this.searchWord.length == 0) {
            this.searchWord = event.target.value
            console.log('1st if :: ', this.searchWord)
        } else {
            this.searchWord = event.target.value
            console.log('2st if :: ', this.searchWord)
        }

        console.log(this.searchWord);

    }

    search() {
        console.log('filter 돌리기 전 : ', this.temp);
        const val = this.searchWord;
        console.log('serchword : ', this.searchWord);
        const temp = this.temp.filter( it => it.office.includes(val));
        console.log('최종 결과 :: ', temp);
        this.rows = temp;
        this.table.offset = 0;

    }

    updatePageSize(value) {

        // if (!this.controls.filter) {
        //     // update the rows
        //     this.rows = [...this.temp];
        //     // Whenever the filter changes, always go back to the first page
        // }

        this.controls.pageSize = parseInt(value)
        this.table.limit = this.controls.pageSize;
        window.dispatchEvent(new Event('resize'));
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

}
