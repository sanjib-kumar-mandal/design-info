import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarkupListPage } from './markup-list.page';

describe('MarkupListPage', () => {
  let component: MarkupListPage;
  let fixture: ComponentFixture<MarkupListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkupListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarkupListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
