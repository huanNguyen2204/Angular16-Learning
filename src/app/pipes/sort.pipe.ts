import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'sort',
  pure: true
})

export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    if (value) {
      return value.sort((a: Product, b: Product) => {
        if (a.name < b.name) {
          return -1;
        } else if (b.name < a.name) {
          return 0;
        }

        return 0;
      })
    }
    
    return [];
  }
}
