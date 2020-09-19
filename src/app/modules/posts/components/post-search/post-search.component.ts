import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {

  readonly SEARCH_KEY = 'search';

  form: FormGroup;

  get searchInput() {
    return this.form.get('search');
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.listenRouteData();
  }

  createForm() {
    this.form = this.formBuilder.group({
      'search': null
    });
  }

  listenRouteData() {
    this.route.queryParams.subscribe(params => {
      const search = params[ this.SEARCH_KEY ];
      if ( search?.length ) {
        const query = decodeURIComponent(search);
        this.searchInput?.setValue(query);
      }
    });
  }

  search() {
    const search = this.searchInput?.value;
    const query = encodeURIComponent( search );

    if ( !search?.length ) {
      return this.router.navigate(['/posts/list']);
    }

    const queryParams = {};
    queryParams[ this.SEARCH_KEY ] = query;

    this.router.navigate(['/posts/search'], { queryParams });
  }
}
