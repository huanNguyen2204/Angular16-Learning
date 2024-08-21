import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent 
  implements OnInit, OnChanges {
  // input is the binding
  @Input() name = '';
  @Input() product: Product | undefined;

  @Output() bought = new EventEmitter<string>();

  buy() {
    this.bought.emit(this.name);
  }

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);   
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const product = changes["name"];

    // if (!product.isFirstChange()) {
    //   const oldValue = product.previousValue;
    //   const newValue = product.currentValue;
    //   console.log(`Product changed from ${oldValue} to ${newValue}`);
    // }
    const product = changes["products"];
    
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }
}
