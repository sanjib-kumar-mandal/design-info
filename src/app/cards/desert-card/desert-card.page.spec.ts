import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesertCardPage } from './desert-card.page';

describe('DesertCardPage', () => {
  let component: DesertCardPage;
  let fixture: ComponentFixture<DesertCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesertCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
