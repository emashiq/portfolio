import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundObjectComponent } from './round-object.component';

describe('RoundObjectComponent', () => {
  let component: RoundObjectComponent;
  let fixture: ComponentFixture<RoundObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
