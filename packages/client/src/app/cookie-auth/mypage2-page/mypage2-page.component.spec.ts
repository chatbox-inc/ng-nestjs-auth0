import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mypage2PageComponent } from './mypage2-page.component';

describe('Mypage2PageComponent', () => {
  let component: Mypage2PageComponent;
  let fixture: ComponentFixture<Mypage2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mypage2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mypage2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
