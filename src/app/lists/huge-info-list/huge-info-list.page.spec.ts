import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HugeInfoListPage } from './huge-info-list.page';

describe('HugeInfoListPage', () => {
  let component: HugeInfoListPage;
  let fixture: ComponentFixture<HugeInfoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HugeInfoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HugeInfoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
