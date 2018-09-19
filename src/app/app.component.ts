import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare let window: any;

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit() {

    this.router.events.subscribe((event) => {
      // see also
      if (event instanceof NavigationEnd) {
        // 路由导航结束后重置滚动条位置
        if (document.documentElement.scrollTop) {
          // console.log('scrollTop1');
          document.documentElement.scrollTop = 0;
        }
        if (window.pageYOffset) {
          // console.log('scrollTop2');
          window.pageYOffset = 0;
        }
        if (document.body.scrollTop) {
          // console.log('scrollTop3');
          document.body.scrollTop = 0;
        }
      };
    });
  }
}