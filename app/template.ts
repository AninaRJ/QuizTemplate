import {Component, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'view-template',
	templateUrl:"./app/newTemplate.html"
})

export class TemplateComponent{
	@Input()
	editedTemplate:string;
	constructor(private sanitizer: DomSanitizer){
	}

}