import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomFivePage } from './custom-five.page';

describe('CustomFivePage', () => {
  let component: CustomFivePage;
  let fixture: ComponentFixture<CustomFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
