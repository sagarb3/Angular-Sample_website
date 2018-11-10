import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseComponent } from "./base/base.component";
import { MainComponent } from "./main/main.component";
import { RoutingModule } from "./routing.module";
@NgModule({
  imports: [CommonModule, RoutingModule],
  declarations: [BaseComponent, MainComponent]
})
export class CaseStudiesModule {}
