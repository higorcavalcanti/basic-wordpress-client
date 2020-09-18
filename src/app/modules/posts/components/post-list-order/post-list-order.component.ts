import { Component, OnInit } from '@angular/core';
import { PostOrderbyEnum } from "../../../../shared/interfaces/post-orderby.enum";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post-list-order',
  templateUrl: './post-list-order.component.html',
  styleUrls: ['./post-list-order.component.scss']
})
export class PostListOrderComponent implements OnInit {

  readonly PostOrderbyEnum = PostOrderbyEnum;

  orderBy: string = PostOrderbyEnum.date;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listenToRouteParams();
  }

  listenToRouteParams() {
    this.route.queryParams.subscribe(queryParams => {
      debugger
      const orderBy = queryParams?.orderby;
      if ( orderBy !== undefined ) {
        this.orderBy = orderBy;
      }
    });
  }

  updateRoute() {
    const queryParams = {
      orderby: this.orderBy
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: "merge",
      queryParams
    });
  }
}
