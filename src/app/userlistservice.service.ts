import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlistserviceService {

  constructor() { }

  getUsers(){
      return[
  {"id": 1, "name": "Ian Mac", "age": 27},
  {"id": 2, "name": "Herlin Dave", "age": 29},
  {"id": 3, "name": "John Bravo", "age": 32},
  {"id": 4, "name": "Ambrogi Produce", "age": 30},
  {"id": 5, "name": "Dave Buster", "age": 25}
];
}

}
