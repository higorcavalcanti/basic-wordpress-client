import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailAuthorComponent } from './post-detail-author.component';

describe('PostDetailAuthorComponent', () => {
  let component: PostDetailAuthorComponent;
  let fixture: ComponentFixture<PostDetailAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
