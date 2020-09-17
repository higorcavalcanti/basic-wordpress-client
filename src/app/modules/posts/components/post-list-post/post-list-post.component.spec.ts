import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListPostComponent } from './post-list-post.component';

describe('PostListPostComponent', () => {
  let component: PostListPostComponent;
  let fixture: ComponentFixture<PostListPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
