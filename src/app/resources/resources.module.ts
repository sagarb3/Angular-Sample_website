import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";
import { BaseComponent } from "./base/base.component";
import { RoutingModule } from "./routing.module";
@NgModule({
  imports: [CommonModule, RoutingModule],
  declarations: [MainComponent, BaseComponent]
})
export class ResourcesModule {}
