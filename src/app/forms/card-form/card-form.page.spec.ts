import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardFormPage } from './card-form.page';

describe('CardFormPage', () => {
  let component: CardFormPage;
  let fixture: ComponentFixture<CardFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
