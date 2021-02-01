import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomOnePage } from './custom-one.page';

describe('CustomOnePage', () => {
  let component: CustomOnePage;
  let fixture: ComponentFixture<CustomOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
