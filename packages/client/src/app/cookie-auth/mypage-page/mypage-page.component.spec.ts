import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypagePageComponent } from './mypage-page.component';

describe('MypagePageComponent', () => {
  let component: MypagePageComponent;
  let fixture: ComponentFixture<MypagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
