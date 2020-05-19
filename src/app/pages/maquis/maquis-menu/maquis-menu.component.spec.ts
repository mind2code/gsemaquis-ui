import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquisMenuComponent } from './maquis-menu.component';

describe('MaquisMenuComponent', () => {
  let component: MaquisMenuComponent;
  let fixture: ComponentFixture<MaquisMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquisMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
