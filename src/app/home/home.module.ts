import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeClockComponent } from './home-clock/home-clock.component';
import { HomePictureComponent } from './home-picture/home-picture.component';

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
  declarations: [HomeComponent, HomeBannerComponent, HomeClockComponent, HomePictureComponent]
})
export class HomeModule { }
