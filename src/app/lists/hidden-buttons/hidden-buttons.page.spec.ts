import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiddenButtonsPage } from './hidden-buttons.page';

describe('HiddenButtonsPage', () => {
  let component: HiddenButtonsPage;
  let fixture: ComponentFixture<HiddenButtonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenButtonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiddenButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
