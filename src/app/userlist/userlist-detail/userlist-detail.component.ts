import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserlistserviceService } from 'src/app/userlistservice.service';


@Component({
  selector: 'app-userlist-detail',
  templateUrl: './userlist-detail.component.html',
  styleUrls: ['./userlist-detail.component.css']
})
export class UserlistDetailComponent implements OnInit {

 userlistID;
 public users;
 public userlist; // Userlist is a member of aray of userlists here so we need to specific define this name nly for fetchng data for details.
  constructor(private _activatedroute: ActivatedRoute, private _userservice: UserlistserviceService, private router:Router) { }

  ngOnInit() {
  this._activatedroute.paramMap.subscribe((params: ParamMap)=>
  {
    let id = parseInt(params.get('id'));
    this.userlistID = id;
    let users = this._userservice.getUsers();
    this.userlist = users.find(u=>u.id==this.userlistID)
  } )  }

  GoPrevous()
  {
    let previousID= this.userlistID - 1;
    this.router.navigate(['/userlist', previousID]);
    if(previousID<1)
    {
      this.router.navigate(['/userlist', this.userlistID])
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
}
