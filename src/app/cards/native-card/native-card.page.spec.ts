import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NativeCardPage } from './native-card.page';

describe('NativeCardPage', () => {
  let component: NativeCardPage;
  let fixture: ComponentFixture<NativeCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NativeCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
