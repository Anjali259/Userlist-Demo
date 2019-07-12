import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserdetailsComponent } from './users/usersdetail/userdetails.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'userlist', component: UserComponent},
  { path: 'contact', component: ContactusComponent},
  {path: 'userlist/:id', component: UserdetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponent = [HomeComponent, UserComponent, ContactusComponent, UserdetailsComponent]
