import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { FormsModule } from "@angular/forms";
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [PaginatorComponent, LoadingComponent, ErrorComponent],
  exports: [
    PaginatorComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
  ]
})
export class SharedModule { }
