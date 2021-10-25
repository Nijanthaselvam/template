import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { CreativityComponent } from './creativity/creativity.component';
import { DollComponent } from './doll/doll.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { MyclicksComponent } from './myclicks/myclicks.component';
import { PlacesComponent } from './places/places.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"login",
     component:LoginComponent
  },

  {
    path:"signup",
    component:SignupComponent
  },

  {
   path:"myclicks",
   component:MyclicksComponent,
   children:[
    {
      path:'animals',
      component:AnimalsComponent
    },

    {
      path:"places",
      component:PlacesComponent
    },

    {
      path:'doll',
      component:DollComponent
    },

    {
      path:"creativity",
      component:CreativityComponent
    },

    
   ]
 },

 {
  path:"about",
  component:ImageComponent
},

  {
    path:"",
    component:HomeComponent
  },

  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
