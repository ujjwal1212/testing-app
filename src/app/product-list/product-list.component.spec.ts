import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let de: DebugElement;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.get(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  fit('should create product service', () => {
    expect(productService).toBeTruthy();
  });

  fit('should test filter product list (done)', (done) => {
    component.searchText = 'fresh';
    const productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  fit('should test filter product list (async)', async(() => {
    component.searchText = 'fresh';
    const productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList({});
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    });
  }));

  fit('should test filter product list (fakeAsync)', fakeAsync(() => {
    component.searchText = 'fresh';
    const productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList({});

    tick();
    fixture.detectChanges();
    const value = de.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchText);
  }));

  fit('should test filter product list (fakeAsync)', 
    fakeAsync(() => {
      component.searchText = 'fresh';
      const productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
      component.filterProductList({});

      tick();
      fixture.detectChanges();
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    })
  );
});
