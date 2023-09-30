import { Component } from "@angular/core"; // It allows to access core functions of Angular

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'unknown';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColour(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}