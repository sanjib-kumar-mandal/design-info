import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomThreePage } from './custom-three.page';

describe('CustomThreePage', () => {
  let component: CustomThreePage;
  let fixture: ComponentFixture<CustomThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
