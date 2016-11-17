import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TemplateComponent} from './template';
import {NewTemplateComponent} from './new-template.component';

import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, TemplateComponent, NewTemplateComponent],
	bootstrap : [AppComponent]
})

export class AppModule {}