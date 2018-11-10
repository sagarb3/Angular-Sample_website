import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { BaseComponent } from "./base/base.component";
export const routes: Routes = [
  {
    path: "authentication",
    component: MainComponent,
    children: [
      {
        path: "",
        component: BaseComponent,
        pathMatch: "full"
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {}
