import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Necklace 1',
      description: 'Description of Necklace 1',
      imageUrl: 'assets/7748.png',
      category: 'necklace' ,
      dimage:'assets/n31.png'// Assuming you have a category property
    },
    {
      id: 2,
      name: 'Bracelet 1',
      description: 'Description of Bracelet 1',
      imageUrl: 'assets/bracelet.png',
      category: 'bracelet',
      dimage:'assets/b31.png' // Assuming you have a category property
    },
    {
      id: 3,
      name:'Nosering 1',
      description:'Description of Nosering',
      imageUrl:'assets/nring.png',
      category:'nosering',
      dimage:'assets/noseringbg.png'
    },

    {
      id: 4,
      name:'Earring 1',
      description:'Description of Nosering',
      imageUrl:'assets/e1.png',
      category:'earring',
      dimage:'assets/e31.png'
    }
    // Add more products as needed
  ];

  constructor() {}

  getBraceletProducts(): Product[] {
    return this.products.filter(product => product.category === 'bracelet');
  }

  getnecklaceProducts(): Product[] {
    return this.products.filter(product => product.category === 'necklace');
  }

  getnoseringProducts(): Product[] {
    return this.products.filter(product => product.category === 'nosering');
  }
  
  getearringProducts(): Product[] {
    return this.products.filter(product => product.category === 'earring');
  }
 

}
