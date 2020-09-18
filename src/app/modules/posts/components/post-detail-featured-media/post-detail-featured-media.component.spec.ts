import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailFeaturedMediaComponent } from './post-detail-featured-media.component';

describe('PostDetailFeaturedMediaComponent', () => {
  let component: PostDetailFeaturedMediaComponent;
  let fixture: ComponentFixture<PostDetailFeaturedMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailFeaturedMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailFeaturedMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
