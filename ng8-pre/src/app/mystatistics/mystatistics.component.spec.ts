import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystatisticsComponent } from './mystatistics.component';

describe('MystatisticsComponent', () => {
  let component: MystatisticsComponent;
  let fixture: ComponentFixture<MystatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
