import {NgModule} from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TemplateComponent} from './template';
import {NewTemplateComponent} from './new-template.component';
import {AnswerComponent} from './answer.component';

import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, FormsModule, MaterialModule.forRoot()],
	declarations: [AppComponent, TemplateComponent, NewTemplateComponent, AnswerComponent],
	bootstrap : [AppComponent]
})

export class AppModule {}