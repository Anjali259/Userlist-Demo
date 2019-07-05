import { Component, OnInit } from '@angular/core';
import { UserlistserviceService } from '../userlistservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public userlists = [];
  constructor(private _userlistservice: UserlistserviceService) { }

 /* userlists = [
    {"id": 1, "name": "Ian Mac", "age": 27},
    {"id": 2, "name": "Herlin Dave", "age": 29},
    {"id": 3, "name": "John Bravo", "age": 32},
    {"id": 4, "name": "Ambrogi Produce", "age": 30},
    {"id": 5, "name": "Dave Buster", "age": 25},
  ]; */

//this is to retrieve userlist data from service file
  ngOnInit() {
    this.userlists = this._userlistservice.getUsers();
  }

}
