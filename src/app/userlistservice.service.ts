import { Injectable } from '@angular/core';
import { userlist } from './users/userlist';


@Injectable({
  providedIn: 'root'
})
export class UserlistserviceService {

  userlist: Array<{id:number, name:string, age:number}> = [
    {"id": 1, "name": "Ian Mac", "age": 27},
    {"id": 2, "name": "Herlin Dave", "age": 29},
    {"id": 3, "name": "John Bravo", "age": 32},
    {"id": 4, "name": "Ambrogi Produce", "age": 30},
    {"id": 5, "name": "Dave Buster", "age": 25}
    ];
  
 constructor() { }

public getUsers() {


  return userlist;               

}


 put(id: number, values: Object = {}): userlist {
  let userlist = this.getuserbyid(id);
  if (!userlist) {
    return null;
  }
  Object.assign(userlist, values);
  return userlist;
}

getuserbyid(id: number): userlist { 
  return this.userlist
  .filter(userlist => userlist.id === id)
  .pop();
}


}
