import {Component, OnInit} from '@angular/core';
import {JsonApiService, NotificationService} from "@app/core/services";
import {isDateValid} from "ngx-bootstrap";

@Component({
    selector: 'ea-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    validatorOptions = {
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                group: '.col-sm-6',
                validators: {
                    notEmpty: {
                        message: '성명을 입력해주세요'
                    }
                }
            },
            mobileNo: {
                group: '.col-sm-6',
                validators: {
                    notEmpty: {
                        message: '휴대폰 번호를 입력해주세요'
                    },
                    regexp: {
                        message: '휴대폰 번호 형식의 숫자로만 입력해주세요'
                    }
                }
            },
            tenant: {
                group: '.col-sm-6',
                validators: {
                    notEmpty: {
                        message: '소속 회사명(테넌트)를 선택해주세요'
                    }
                }
            }
        }
    }

    temp = [];
    rows = [];
    companyList = [];
    companyFilter = [];


    public data = {
        company: '',
        name: '',
        mobileNo: ''
    }


    //regData: boolean = false;


    constructor(
        private jsonApiService: JsonApiService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit() {
        // register button disabled
        //this.regData = true;
        // option - company 설정
        this.jsonApiService.fetch('/_testData/test.json')
            .subscribe(data => {
                this.temp = [...data];
                this.rows = data;

                for (let companies of this.temp) {
                    this.companyList.push(companies.company);
                }
                this.companyFilter = this.companyList.filter(
                    (item, idx, array) => {
                        return array.indexOf(item) == idx;
                    }
                )
            })
    }


    onSubmit() {
        if(!this.data.name || !this.data.company || !this.data.mobileNo) {
            alert('정보를 모두 입력해 주세요.')
            return;
        }
        this.smartMessageBox()
    }


    smartMessageBox() {
        this.notificationService.smartMessageBox({
            title: "<i class=\"fa fa-send-o\"></i>  &nbsp; 출입 등록 요청",
            content: this.data.company + "  방문을 위해 얼굴을 등록할 수 있는 URL이 포함된 MMS가 '" + this.data.name + "'님의 휴대폰번호( '" + this.data.mobileNo + "' )로 전송됩니다. 전송하시겠습니까?",
            buttons: '[아니요][네]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "네") {
                this.notificationService.smallBox({
                    title: this.data.mobileNo + " 로 전송 완료되 었습니다.",
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

    mobileNoFocusout(event) {
        var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;	// 특수문자
        let value = event.target.value;
        if (value === '') {
            return;
        } else if (pattern3.test(value)) {
            return;
        } else if (value.length != 10 && value.length != 11) {
            return;
        }
    }


}
