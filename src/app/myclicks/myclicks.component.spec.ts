import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclicksComponent } from './myclicks.component';

describe('MyclicksComponent', () => {
  let component: MyclicksComponent;
  let fixture: ComponentFixture<MyclicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
