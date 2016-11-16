import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NewTemplateComponent} from './new-template.component';

import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, NewTemplateComponent],
	bootstrap : [AppComponent]
})

export class AppModule {}