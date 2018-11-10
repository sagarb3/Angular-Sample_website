import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input()
  productDetail: any;
  @Output()
  selectedItem = new EventEmitter<{ subSelected: Number }>();
  constructor() {}
  onSubSelected(id) {
    this.selectedItem.emit({
      subSelected: id
    });
  }
  ngOnInit() {}
}
