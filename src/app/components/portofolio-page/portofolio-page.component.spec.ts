import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioPageComponent } from './portofolio-page.component';

describe('PortofolioPageComponent', () => {
  let component: PortofolioPageComponent;
  let fixture: ComponentFixture<PortofolioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofolioPageComponent],
    });
    fixture = TestBed.createComponent(PortofolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
