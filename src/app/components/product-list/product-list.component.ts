import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
  implements AfterViewInit {
    
  title = "product-list works!";
  currentClasses = {
    star: true,
    active: false
  };
  currentStyle = {
    color: "blue",
    backgroundColor: "yellow"
  };

  selectedProduct: Product | undefined;

  today = new Date()

  products: Product[] = [
    {
      name: "Webcam",
      price: 100
    },
    {
      name: "Microphone",
      price: 100
    },
    {
      name: "Wireless keyboard",
      price: 85
    }
  ]

  productDetail = {
    product: this.products[1],
    name: "Huan Nguyen",
    age: 31
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onClick() {
    alert("hihi");
  }

  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct?.name}`);
  }

  trackByProducts(index: number, name: string): string {
    return name;
  }
}
