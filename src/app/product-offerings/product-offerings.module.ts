import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseComponent } from "./base/base.component";
import { MainComponent } from "./main/main.component";
import { RoutingModule } from "./routing.module";
import { ProductBarComponent } from "./product-bar/product-bar.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductDataService } from "./product.service";
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  imports: [CommonModule, RoutingModule],
  declarations: [
    BaseComponent,
    MainComponent,
    ProductBarComponent,
    ProductCardComponent,
    ProductDetailComponent
  ],
  providers: [ProductDataService]
})
export class ProductOfferingsModule {}
