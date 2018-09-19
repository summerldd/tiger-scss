import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "home",
        // canActivate: [AuthGuardService],
        loadChildren: "./home/home.module#HomeModule"
      },
    ]
  },

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
