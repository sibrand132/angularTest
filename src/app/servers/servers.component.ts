import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = ['TestServer1', 'TestServer2'];
  allowNewServer = false;
  serverCreationStatus = "No server created!"
  serverName: string = "";
  serverCreated = false;


  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } , 2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created, name is " + this.serverName
  }

  onUpdateServer(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
