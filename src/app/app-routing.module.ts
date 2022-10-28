import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
{
  path: '',
  redirectTo:'/home',
  pathMatch:'full'
},

{

  path: "home",
  component: DriversListComponent

},
{
  path:'team/:id',
  component: TeamComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
