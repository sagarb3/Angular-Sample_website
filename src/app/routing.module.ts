import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { NotFoundComponent } from "./common/not-found/not-found.component";
const routes: Routes = [
  {
    path: "product-offerings",
    redirectTo: "/product-offerings",
    pathMatch: "full"
  },
  {
    path: "home",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "authentication",
    redirectTo: "/authentication",
    pathMatch: "full"
  },
  {
    path: "case-studies",
    redirectTo: "/case-studies",
    pathMatch: "full"
  },
  {
    path: "pricing",
    redirectTo: "/pricing",
    pathMatch: "full"
  },
  {
    path: "resources",
    redirectTo: "/resources",
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "/product-offerings",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
