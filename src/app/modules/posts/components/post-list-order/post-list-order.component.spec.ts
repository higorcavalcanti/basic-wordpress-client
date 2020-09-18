import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListOrderComponent } from './post-list-order.component';

describe('PostListOrderComponent', () => {
  let component: PostListOrderComponent;
  let fixture: ComponentFixture<PostListOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
