import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeHeadComponent } from './home-page/home-head/home-head.component';
import { HomeFooterComponent } from './home-page/home-footer/home-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, HomeHeadComponent, HomeFooterComponent]
})
export class CurrentModule { }
