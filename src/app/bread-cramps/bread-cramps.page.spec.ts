import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreadCrampsPage } from './bread-cramps.page';

describe('BreadCrampsPage', () => {
  let component: BreadCrampsPage;
  let fixture: ComponentFixture<BreadCrampsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrampsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadCrampsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
