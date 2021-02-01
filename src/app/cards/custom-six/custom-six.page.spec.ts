import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSixPage } from './custom-six.page';

describe('CustomSixPage', () => {
  let component: CustomSixPage;
  let fixture: ComponentFixture<CustomSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
