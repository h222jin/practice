import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {GatewayService} from "@app/features/_service/gateway.service";
import {tryCatch} from "rxjs/internal-compatibility";
import {Subscription} from "rxjs";
import {Location} from "@angular/common";
import {getExpressionLoweringTransformFactory} from "@angular/compiler-cli/src/transformers/lower_expressions";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('editNoticeTemplate') editNoticeTemplate;
  modalRef: BsModalRef
  locationSubscription: Subscription;
  putData = '공지사항을 입력해 주세요 ';
  res: any;

  constructor(
      private modalService: BsModalService,
      private gatewayService: GatewayService,
      private location: Location
  ) { }

  ngOnInit() {

    this.putData = sessionStorage.getItem('data');
    console.log(sessionStorage.getItem('data'));

  }

  putDataChange($event){
      this.putData = $event.target.value;
  }


  edit() {
  this.modalRef = this.modalService.show(this.editNoticeTemplate)
  }

  save() {
    console.log(this.putData);
    sessionStorage.setItem('data', this.putData);

    this.gatewayService.registerNotice(this.putData)
        .subscribe(res => {
          this.res = res;

        })
    this.modalRef && this.modalRef.hide()

  }

  // putDataChange($event){
  //   try{
  //     this.gateService.postNotice()
  //
  //     this.putData = JSON.parse($event.target.value)
  //   } catch(e){
  //     this.putData = ''
  //   }
  // }

}
