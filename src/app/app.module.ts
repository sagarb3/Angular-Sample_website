import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { NotFoundComponent } from "./common/not-found/not-found.component";

import { AuthenticationModule } from "./authentication/authentication.module";
import { CaseStudiesModule } from "./case-studies/case-studies.module";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";
import { PricingModule } from "./pricing/pricing.module";
import { ProductOfferingsModule } from "./product-offerings/product-offerings.module";
import { ResourcesModule } from "./resources/resources.module";

import { RoutingModule } from "./routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthenticationModule,
    CaseStudiesModule,
    HomeModule,
    PricingModule,
    ProductOfferingsModule,
    ResourcesModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
