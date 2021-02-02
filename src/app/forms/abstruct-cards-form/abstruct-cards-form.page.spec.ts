import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbstructCardsFormPage } from './abstruct-cards-form.page';

describe('AbstructCardsFormPage', () => {
  let component: AbstructCardsFormPage;
  let fixture: ComponentFixture<AbstructCardsFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstructCardsFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstructCardsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
