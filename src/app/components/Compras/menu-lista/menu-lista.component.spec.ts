import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaComponent } from './menu-lista.component';

describe('MenuListaComponent', () => {
  let component: MenuListaComponent;
  let fixture: ComponentFixture<MenuListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuListaComponent]
    });
    fixture = TestBed.createComponent(MenuListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
