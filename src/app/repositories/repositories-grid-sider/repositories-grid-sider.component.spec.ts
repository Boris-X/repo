import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesGridSiderComponent } from './repositories-grid-sider.component';

describe('RepositoriesGridSiderComponent', () => {
  let component: RepositoriesGridSiderComponent;
  let fixture: ComponentFixture<RepositoriesGridSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesGridSiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesGridSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
