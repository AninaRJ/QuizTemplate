import {Component} from '@angular/core';
import {TemplateComponent} from './template';

const TEMPLATE: string = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="ISO-8859-1">\n\t<title>Quiz Name</title>\n</head>\n<body>\n\tComing from template url\n</body>\n</html>';

@Component({
	selector: 'new-template-html',
	template: `<textarea rows="10" cols="50" [(ngModel)] = "template"></textarea>
				<div>
					<button (click)="resetTemplate()">Reset HTML</button>
					<button (click)="createHTML()">Create HTML</button>
					<button (click)="viewHTML()">View as HTML</button>
				</div>
				<div *ngIf="viewFlag">
					<view-template [editedTemplate]="template"></view-template>
				</div>`
})

export class NewTemplateComponent{
	template:string = TEMPLATE;
	viewFlag:boolean = false;
	
	resetTemplate():void{
		this.template = TEMPLATE;
	}
	
	viewHTML(): void{
		this.viewFlag = true;
	}
}