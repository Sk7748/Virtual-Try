import { Component, OnInit } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.scss']
})
export class EarringComponent {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.products = this.productService.getearringProducts();
  }

  redirectToAppWithProductId(dimage: string,category:string) {
    // Navigate to app-component with product id as a parameter
    this.router.navigate(['/camera'], { queryParams: { dimage:dimage , category: category } });
  }
  

}
