import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [ElementsComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  // Add entryComponents and insert the custom elements components here
  entryComponents: [ElementsComponent],
})

export class AppModule {
  constructor(private injector: Injector) {}
  // Custom elements must be bootstrapped manually
  ngDoBootstrap() {
    const element = createCustomElement(ElementsComponent, {
      injector: this.injector,
    });
    customElements.define('elements-component', element);
  }
}
