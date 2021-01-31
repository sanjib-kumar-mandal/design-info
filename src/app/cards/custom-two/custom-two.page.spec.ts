import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomTwoPage } from './custom-two.page';

describe('CustomTwoPage', () => {
  let component: CustomTwoPage;
  let fixture: ComponentFixture<CustomTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
