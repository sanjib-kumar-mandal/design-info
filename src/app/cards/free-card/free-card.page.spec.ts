import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeCardPage } from './free-card.page';

describe('FreeCardPage', () => {
  let component: FreeCardPage;
  let fixture: ComponentFixture<FreeCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
