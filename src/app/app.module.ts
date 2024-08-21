import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Modules importing
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from "./modules/products/products.module";
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { ProductHostDirective } from './directives/product-host.directive';
import { PermissionDirective } from './directives/permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    ProductsModule,
    FilterPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
