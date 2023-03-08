import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerCardComponent } from './main-container-card.component';

describe('MainContainerCardComponent', () => {
  let component: MainContainerCardComponent;
  let fixture: ComponentFixture<MainContainerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContainerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContainerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
