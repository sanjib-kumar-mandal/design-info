import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SageSavasListPage } from './sage-savas-list.page';

describe('SageSavasListPage', () => {
  let component: SageSavasListPage;
  let fixture: ComponentFixture<SageSavasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SageSavasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SageSavasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
