import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailBiographyComponent } from './post-detail-biography.component';

describe('PostDetailBiographyComponent', () => {
  let component: PostDetailBiographyComponent;
  let fixture: ComponentFixture<PostDetailBiographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailBiographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
