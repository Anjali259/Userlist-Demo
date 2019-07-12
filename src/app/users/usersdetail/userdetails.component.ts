import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserlistserviceService } from 'src/app/userlistservice.service';
import { userlist } from '../userlist';



@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

 userlistID;
 public users;
 userlists: userlist[];

   public userlist; // Userlist is a member of aray of userlists here so we need to specific define this name nly for fetchng data for details.
  
  
  constructor(private _activatedroute: ActivatedRoute, private _userservice: UserlistserviceService, private router:Router) {
    
   }

  ngOnInit() {
  this._activatedroute.paramMap.subscribe((params: ParamMap)=>
  {
    let id = parseInt(params.get('id'));
    this.userlistID = id;
    //let users = this._userservice.getUsers();
  //  this.userlist = users.find(u=>u.id==this.userlistID)
   // this.userlist = this.users.filter(u=>u.id==this.userlistID);
   this.userlist =  this._userservice.getUsers().filter(u => u.id == this.userlistID)[0];
  
  } )  }

   GoPrevous()
  {
    let previousID= this.userlistID - 1;
    this.router.navigate(['/userlist', previousID]);
    if(previousID<1)
    {
      this.router.navigate(['userlist'], {relativeTo: this._activatedroute});
    }
    
  }
  GoNext()
  {
    let NextID= this.userlistID + 1;
    this.router.navigate(['/userlist', NextID]);
    if(NextID>5)
    {
      this.router.navigate(['/userlist', this.userlistID])
    }
    
  }

  GoBack()
  {
    let selectedId = this.userlistID ? this.userlistID: null;
     this.router.navigate(['/userlist', {id: selectedId}]);
  }

getUsers(){
  this.userlists = this._userservice.getUsers();
}
 
updateTodo(userlist) {
     let newvalue = this.userlist;
    console.log(newvalue);
    this._userservice.put(newvalue);
  }
 


//  showeditpage(){
  //  this.router.navigate(['useredit'], {relativeTo: this._activatedroute}); //child routes used here..
  //}


}
 

