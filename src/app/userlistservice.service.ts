import { Injectable } from '@angular/core';
import { userlist } from './users/userlist';


@Injectable({
  providedIn: 'root'
})
export class UserlistserviceService {

  userlist = [
    {"id": 1, "name": "Ian Mac", "age": 27},
    {"id": 2, "name": "Herlin Dave", "age": 29},
    {"id": 3, "name": "John Bravo", "age": 32},
    {"id": 4, "name": "Ambrogi Produce", "age": 30},
    {"id": 5, "name": "Dave Buster", "age": 25}
    ];
  
 constructor() { }

public getUsers() {
 
 let userlists: userlist[];
 {

 userlists= [
      new userlist(1,'Ian Mac',27),
      new userlist(2,'Herlin Dave',29),
      new userlist(3,'John Bravo',32),
      new userlist(4, 'Ambrogi Produce', 30),
      new userlist(5, 'Dave Buster', 25)
    ]

  return userlists;               
}
}


 /* getUsers(){
    let userlists: userlist[];
      return[
  {"id": 1, "name": "Ian Mac", "age": 27},
  {"id": 2, "name": "Herlin Dave", "age": 29},
  {"id": 3, "name": "John Bravo", "age": 32},
  {"id": 4, "name": "Ambrogi Produce", "age": 30},
  {"id": 5, "name": "Dave Buster", "age": 25}
];
  }
  */


/*put(changed) {
  return new Promise(resolve => {
    const index = this.getUsers().findIndex(userlist => userlist === changed);
    this.userlists[index].id = changed.id;
    resolve(changed);
    
  });

}
get() {
  return new Promise(resolve => resolve(this.userlists));
}
*/

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
