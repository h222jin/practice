import {Injectable, Input} from "@angular/core";
import {ApiGatewayService} from "@app/features/_service/api-gateway.service";
import {Subject} from "rxjs";

@Injectable()

export class GatewayService {

    private subject = new Subject<any>()

    constructor( private apiGateway: ApiGatewayService) {

    }

    registerNotice(data){
        let postData = data;
        console.log('service :: ', data);
        let jsonBody = JSON.stringify(postData);
        return this.apiGateway.post(`/registerNotice`,jsonBody)
    }

    getTreeData() {
        return this.apiGateway.get(`/treeData`)
    }

    postTreeData(data){
        console.log('tree service :: ', data);
        let jsonBody = JSON.stringify(data)
        return this.apiGateway.post(`/postTreeData`, jsonBody)
    }

    postSendMessage(data) {
        let messageData = data;
        console.log('send message service :: ', data)
        let jsonBody = JSON.stringify(messageData);
        return this.apiGateway.post(`/SendMessage`, jsonBody);

    }
}
