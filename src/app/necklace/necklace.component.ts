import { Component, OnInit } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.scss']
})
export class NecklaceComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.products = this.productService.getnecklaceProducts();
}
redirectToAppWithProductId(diamge: string,category:string) {
  // Navigate to app-component with product id as a parameter
  this.router.navigate(['/camera'], { queryParams: { dimage: diamge, category: category } });
}



}