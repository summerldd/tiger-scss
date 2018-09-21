import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as moment from 'moment';
declare let $: any;
@Component({
  selector: 'app-home-clock',
  templateUrl: './home-clock.component.html',
  styleUrls: ['./home-clock.component.scss']
})
export class HomeClockComponent implements OnInit {
  time:any;
  arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  h1:string;
  h2:string;
  m1:string;
  m2:string;
  s1:string;
  s2:string;
  day:number;
  constructor(
  ) { }

  ngOnInit() {
    this.update_time();
    
    // this.myClock();
  }

  update_time(){
    this.time = moment().format("hhmmssdA");
    this.h1 = this.arr[this.time.substring(0,1)];
    this.h2 = this.arr[this.time.substring(1,2)];
    this.m1 = this.arr[this.time.substring(2,3)];
    this.m2 = this.arr[this.time.substring(3,4)];
    this.s1 = this.arr[this.time.substring(4,5)];
    this.s2 = this.arr[this.time.substring(5,6)];
    this.day = this.time.substring(6,7);
    setTimeout(_ => {
      this.update_time();
    }, 1000);
    // let that = this;
    // setTimeout(function(){
    //   that.update_time();
    // }, 1000);  
    // 在这里箭头函数作用域问题？
  }
}
