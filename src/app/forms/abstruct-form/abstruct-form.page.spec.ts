import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbstructFormPage } from './abstruct-form.page';

describe('AbstructFormPage', () => {
  let component: AbstructFormPage;
  let fixture: ComponentFixture<AbstructFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstructFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstructFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
