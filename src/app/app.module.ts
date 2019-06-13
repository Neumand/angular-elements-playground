import { DragDropModule } from '@angular/cdk/drag-drop';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSliderModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbDatepickerModule,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ElementsComponent } from './elements/elements.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [ElementsComponent, HelloWorldComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModalModule,
    NgbDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSliderModule,
    DragDropModule,
  ],
  providers: [],
  // Add entryComponents and insert the custom elements components here
  entryComponents: [ElementsComponent, HelloWorldComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ElementsComponent, {
      injector: this.injector,
    });
    customElements.define('elements-component', el);

    const el2 = createCustomElement(HelloWorldComponent, {
      injector: this.injector,
    });
    customElements.define('hello-world-component', el2);
  }

  // Custom elements must be bootstrapped manually
  ngDoBootstrap() {}
}
