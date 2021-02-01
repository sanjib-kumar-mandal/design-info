import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IconListPage } from './icon-list.page';

describe('IconListPage', () => {
  let component: IconListPage;
  let fixture: ComponentFixture<IconListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IconListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
