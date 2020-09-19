import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailBibliographyComponent } from './post-detail-bibliography.component';

describe('PostDetailBibliographyComponent', () => {
  let component: PostDetailBibliographyComponent;
  let fixture: ComponentFixture<PostDetailBibliographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailBibliographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailBibliographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
