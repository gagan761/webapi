import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsearchComponent } from './gitsearch.component';

describe('GitsearchComponent', () => {
  let component: GitsearchComponent;
  let fixture: ComponentFixture<GitsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
