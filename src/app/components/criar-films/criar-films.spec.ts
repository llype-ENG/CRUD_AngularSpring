import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFilms } from './criar-films';

describe('CriarFilms', () => {
  let component: CriarFilms;
  let fixture: ComponentFixture<CriarFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarFilms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFilms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
