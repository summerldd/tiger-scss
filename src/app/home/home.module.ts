import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
