import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { OtherModule } from './other/other.module';
import { HighlightedDirective } from './highlighted.directive';
import { NgUnlessDirective } from './ng-unless.directive';
import { SelectDirective } from './select.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    HighlightedDirective,
    NgUnlessDirective,
    SelectDirective
  ],
  imports: [
    BrowserModule,
    OtherModule,
    FormsModule
  ],
  entryComponents: [
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
