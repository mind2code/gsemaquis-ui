import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquisDetailsComponent } from './maquis-details.component';

describe('MaquisDetailsComponent', () => {
  let component: MaquisDetailsComponent;
  let fixture: ComponentFixture<MaquisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
