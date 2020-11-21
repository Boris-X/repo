import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesGridComponent } from './repositories-grid.component';

describe('RepositoriesGridComponent', () => {
  let component: RepositoriesGridComponent;
  let fixture: ComponentFixture<RepositoriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
