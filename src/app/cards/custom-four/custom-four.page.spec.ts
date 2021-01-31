import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomFourPage } from './custom-four.page';

describe('CustomFourPage', () => {
  let component: CustomFourPage;
  let fixture: ComponentFixture<CustomFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
