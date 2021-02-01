import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwiggylistPage } from './swiggylist.page';

describe('SwiggylistPage', () => {
  let component: SwiggylistPage;
  let fixture: ComponentFixture<SwiggylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwiggylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
