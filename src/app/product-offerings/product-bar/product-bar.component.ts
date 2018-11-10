import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "../product.service";

@Component({
  selector: "app-product-bar",
  templateUrl: "./product-bar.component.html",
  styleUrls: ["./product-bar.component.css"]
})
export class ProductBarComponent implements OnInit {
  constructor(private prodD: ProductDataService) {}
  selectedProduct: any;
  selectedSubProduct: any;
  ngOnInit() {
    this.selectedProduct = this.prodD.getProductListByProductId("p1");
    //const selectedProd = Object.assign({}, this.selectedProduct);
    //const { id } = selectedProd.shift();
    this.selectedSubProduct = this.prodD.getSubProductBySubId(1);
  }
  productSelected(id) {
    this.selectedProduct = this.prodD.getProductListByProductId(id);
  }
  onSubSelection(params) {
    console.log("print", params);
    this.selectedSubProduct = this.prodD.getSubProductBySubId(
      params.subSelected
    );
  }
}
