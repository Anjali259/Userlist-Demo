import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserlistDetailComponent } from './userlist/userlist-detail/userlist-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'userlist', component: UserlistComponent},
  { path: 'contact', component: ContactusComponent},
  {path: 'userlist/:id', component: UserlistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponent = [HomeComponent, UserlistComponent, ContactusComponent, UserlistDetailComponent]
