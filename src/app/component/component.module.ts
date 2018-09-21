import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line/time-line.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [TimeLineComponent],
  declarations: [TimeLineComponent]
})
export class ComponentModule { }
