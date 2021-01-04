import {Component, OnInit} from '@angular/core';
import {JsonApiService, NotificationService} from "@app/core/services";
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
    regName: string;
    regMobileNo: string;
    regCompany: string;

    public searchOptions = {
        company: ''
    }
    regData: boolean = false;

    constructor(
        private jsonApiService: JsonApiService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit() {
        // option - company 설정
        this.jsonApiService.fetch('/_testData/test.json')
            .subscribe(data => {
                this.temp = [...data];
                this.rows = data;

                for (let companies of this.temp) {
                    this.companyList.push(companies.company);
                }
                this.companyFilter = this.companyList.filter(
                    (item, idx, array) => { return array.indexOf( item ) == idx; }
                )
            })
    }


    getName(event) {
        this.regName = event.target.value;
    }
    getMobileNo(event) {
        this.regMobileNo = event.target.value;
    }

    getCompany(event) {
        this.regCompany = event.target.value;
    }

    registerData() {
        if(this.regMobileNo && this.regCompany && this.regName.length > 1) {
            this.regData = true;
            this.smartMessageBox()
        }
         else {
            alert('필수 항목을 모두 입력해 주세요.')
        }

    }

    smartMessageBox(){
        this.notificationService.smartMessageBox({
            title: "<i class=\"fa fa-send-o\"></i>  &nbsp; 출입 등록 요청",
            content: this.regCompany + "  방문을 위해 얼굴을 등록할 수 있는 URL이 포함된 MMS가 '" + this.regName + "'님의 휴대폰번호( '" + this.regMobileNo + "' )로 전송됩니다. 전송하시겠습니까?",
            buttons: '[아니요][네]'
        }, (ButtonPressed) => {
            if(ButtonPressed === "네") {
                this.notificationService.smallBox({
                    title: this.regMobileNo+ " 로 전송 완료되 었습니다.",
                    content: "<i class='fa fa-clock-o'></i> 이 알림은 곧 사라집니다.",
                    color: "#3F4B3B",
                    iconSmall: "fa fa-thumbs-up bounce animated",
                    timeout: 3000
                })
            } else {
                this.notificationService.smallBox({
                    title: "전송에 실패하였습니다. 다시 시도해 주세요.",
                    content: "<i class='fa fa-clock-o'></i> 이 알림은 곧 사라집니다.",
                    color: "#566270",
                    iconSmall: "bounce animated",
                    timeout: 3000
                })
            }
        })

    }


}
