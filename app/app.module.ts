import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NewTemplateComponent} from './new-template.component';
import {TemplateComponent} from './template';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'viewTemplate/:template', component: TemplateComponent }
  ];

@NgModule({
	imports: [BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
	declarations: [AppComponent, TemplateComponent, NewTemplateComponent],
	bootstrap : [AppComponent]
})

export class AppModule {}