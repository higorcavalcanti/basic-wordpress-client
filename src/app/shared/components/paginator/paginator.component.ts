import { Component, Input, OnInit } from '@angular/core';
import { PagedResponse } from "../../interfaces/paged-response";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() response: PagedResponse<any>;

  @Input() itemsPerPage: number = 10;
  @Input() maxSize: number = 11;

  @Input() firstText: string = 'Primeira';
  @Input() nextText: string = 'Próxima';
  @Input() previousText: string = 'Anterior';
  @Input() lastText: string = 'Última';

  page: number = 2;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.listenRouteParams();
  }

  listenRouteParams() {
    this.route.queryParams.subscribe(queryParams => {
      const page = Number(queryParams?.page);
      this.page = page >= 1 ? page : 1;
    });
  }

  pageChanged(event) {
    this.page = event.page;
    this.updatePage();
  }

  updatePage() {
    const queryParams = {
      page: this.page
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: "merge",
      queryParams
    })
  }
}
