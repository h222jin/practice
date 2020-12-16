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
    test = [];
    countData = [];
    reorderable: boolean = true;
    loadingIndicator: boolean = true;

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

            this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data => {
                // 인적사항 가져옴
                this.temp = [...data];

                // for 돌면서 포지션 뽑아내
                for (let i of this.temp) {
                    this.test.push(i.position)
                }
                console.log('test :: ', this.test);

                // 각 포지션의 갯수 뽑아
                this.countData = this.test.reduce((x, y, idx, arr) => {
                    x[y] = ++x[y] || 1;
                    return x
                }, [])

                for (let i = 0; i < this.countData.length; i++) {
                    console.log('i ::', i);
                }

                //this.pieData.labels = this.test;
                this.pieData.datasets[0].data = this.countData;
                this.pieData.labels = this.test;
                console.log('결과 :: ', this.pieData);

            })

            // 최종으로 나왔으면 하는 형태
            // { data : [ {"developter" : 46}, {...} ] }
            // this.pieData.labels = this.test;
            // this.pieData.datasets.data = this.countData;
            // console.log('결과 :: ', this.pieData);
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
