import { Component, OnInit } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss']
})
export class BraceletComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.products = this.productService.getBraceletProducts();
  }

  redirectToAppWithProductId(dimage: any,category:string) {
    // Navigate to app-component with product id as a parameter
    this.router.navigate(['/camera'], { queryParams: { dimage: dimage, category: category } });
  }
}

