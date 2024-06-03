import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePeoplesComponent } from './active-peoples.component';

describe('ActivePeoplesComponent', () => {
  let component: ActivePeoplesComponent;
  let fixture: ComponentFixture<ActivePeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivePeoplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivePeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
