import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { MarkdownModule, MARKED_OPTIONS, provideMarkdown } from "ngx-markdown";
import { SplitStringPipe } from "./filters/splitString.pipe";
import { SignUpVerifyComponent } from "./components/auth/signup/signupverify/signUpVerify.component";
import {
  CreateProfileCompanyComponent
} from "./components/company/create-profile-company/create-profile-company.component";
import { CardResponseComponent } from "./components/company/card-response/card-response.component";
import { CreateProfileComponent } from "./components/candidate/createProfile/createProfile.component";
import { ProfileComponent } from "./components/candidate/profile/profile.component";
import { FilterComponent } from "./components/filter/filter.component";
import { ProfileCustomerComponent } from "./components/company/profile/profileCustomer.component";
import { PricePipe } from "./filters/price.pipe";

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    SplitStringPipe,
    PricePipe,
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    MarkdownModule.forRoot( {
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: true
        }
      }
    } ),
    SignUpVerifyComponent,
    CreateProfileCompanyComponent,
    CardResponseComponent,
    CreateProfileComponent,
    ProfileComponent,
    FilterComponent,
    ProfileCustomerComponent,
  ],
  providers: [
    // provideClientHydration(),
    provideHttpClient( withFetch() ),
    provideMarkdown()
  ],
  exports: [
    SplitStringPipe,
    PricePipe,
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
