import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWordlistComponent } from './profile-wordlist.component';

describe('ProfileWordlistComponent', () => {
  let component: ProfileWordlistComponent;
  let fixture: ComponentFixture<ProfileWordlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWordlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
