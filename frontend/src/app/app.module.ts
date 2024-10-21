import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { MarkdownModule, MARKED_OPTIONS, provideMarkdown } from "ngx-markdown";
import { SplitStringPipe } from "./filters/splitString.pipe";

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    SplitStringPipe,
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
    } )
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient( withFetch() ),
    provideMarkdown()
  ],
  exports: [
    SplitStringPipe
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
