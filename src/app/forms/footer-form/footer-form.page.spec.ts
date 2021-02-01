import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterFormPage } from './footer-form.page';

describe('FooterFormPage', () => {
  let component: FooterFormPage;
  let fixture: ComponentFixture<FooterFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
