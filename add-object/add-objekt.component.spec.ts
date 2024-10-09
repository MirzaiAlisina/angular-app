import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjektComponent } from './add-objekt.component';

describe('AddObjektComponent', () => {
  let component: AddObjektComponent;
  let fixture: ComponentFixture<AddObjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddObjektComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddObjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
