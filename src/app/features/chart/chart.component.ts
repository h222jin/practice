import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {JsonApiService} from "@app/core/services";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {isJsObject} from "@angular/core/src/change_detection/change_detection_util";
import {count} from "rxjs/operators";
import {enableBindings} from "@angular/core/src/render3";

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
    searchCate = [];

    names = [];
    offices = [];
    officeList = [];

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

            console.log(this.officeList);
            console.log('labels : ', this.pieData.labels);
        })

        this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data => {
            // 인적사항 가져옴
            this.temp = [...data];

            // 검색 옵셧 세팅

            for (let row of this.temp) {
                //this.positions.push(row.position)
                this.offices.push(row.office)
                //this.ages.push(row.age)
                //this.salaries.push(row.salary)

            }
            // this.positionList = this.positions.filter(
            //     (item, idx, array) => { return array.indexOf(item) == idx; }
            // )
            // this.positionList.sort();
            this.officeList = this.offices.filter(
                (item, idx, array) => { return array.indexOf(item) == idx; }
            )
            this.officeList.sort();

            // 지역명 파이데이터의 라벨로 지정
            this.pieData.labels = this.officeList;



            // let countArray = [];
            // let uniqueNames = {};
            // console.log('length', this.temp.length);
            // for (let i=0; i<this.temp.length; i++ ) {
            //     if (!uniqueNames[this.temp[i].office]) {
            //         countArray.push(this.temp[i])
            //         console.log('countArray :: ', countArray);
            //     }
            //     uniqueNames[this.temp[i].office] = ((uniqueNames[this.temp[i].office] || 0) + 1);
            // }
            // for (let j=0; j<countArray.length; j++) {
            //     countArray[j].times = uniqueNames[countArray[j].office];
            // }
            // console.log('과연?>>>???/  ',countArray);



            // this.ageList = this.ages.filter(
            //     (item, idx, array) => { return array.indexOf(item) == idx; }
            // )
            // this.ageList.sort();
            // this.salaryList = this.salaries.filter(
            //     (item, idx, array) => { return array.indexOf(item) == idx; }
            // )
            // this.salaryList.sort();


            // for (let item in this.countData) {
            //     this.result.push(item);
            // }
            //
            // console.log('result :: ',this.result);
            // console.log('countData :: ',this.countData);


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
