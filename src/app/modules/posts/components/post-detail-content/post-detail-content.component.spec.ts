import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailContentComponent } from './post-detail-content.component';

describe('PostDetailContentComponent', () => {
  let component: PostDetailContentComponent;
  let fixture: ComponentFixture<PostDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
