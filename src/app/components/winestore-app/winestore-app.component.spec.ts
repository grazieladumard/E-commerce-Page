import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinestoreAppComponent } from './winestore-app.component';

describe('WinestoreAppComponent', () => {
  let component: WinestoreAppComponent;
  let fixture: ComponentFixture<WinestoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinestoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinestoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
