import {Component} from '@angular/core';
const TEMPLATE: string = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="ISO-8859-1">\n\t<title>Quiz Name</title>\n</head>\n<body>\n\tComing from template url\n</body>\n</html>';

@Component({
	selector: 'new-template-html',
	template: `<textarea rows="10" cols="50" [(ngModel)] = "template"></textarea>
				<div>
					<button (click)="resetTemplate()">Reset</button>
					<button (click)="createHTML()">Create HTML</button>
					<a [routerLink]="['viewTemplate', template]">View as HTML</a>
				</div>
				<router-outlet></router-outlet>`
})

export class NewTemplateComponent{
	template:string = TEMPLATE;
	id:string = "Ranjani";	
}