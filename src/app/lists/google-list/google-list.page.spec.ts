import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleListPage } from './google-list.page';

describe('GoogleListPage', () => {
  let component: GoogleListPage;
  let fixture: ComponentFixture<GoogleListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
