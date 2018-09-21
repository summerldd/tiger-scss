import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  array = [ '/assets/images/bgpic.jpg' ];
  constructor() { }

  ngOnInit() {
  }

}
