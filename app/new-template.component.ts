import {Component} from '@angular/core';
import {TemplateComponent} from './template';
import {AnswerComponent} from './answer.component';

const TEMPLATE: string = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="ISO-8859-1">\n\t<title>Quiz Name</title>\n</head>\n<body>\n\t\n</body>\n</html>';

@Component({
	selector: 'new-template-html',
	template: `<div class="alignLeft">
					<md-textarea placeholder="Template HTML" rows="15" cols="90" [(ngModel)] = "template"></md-textarea>
					
					<div>
						<answer-view></answer-view>
						<label><h4>Upload image(s)</h4></label>
						<input type="file" id="theFile" />
					</div>
					
					<div class="buttonArea">
						<button md-raised-button color="accent" (click)="resetTemplate()">Reset HTML</button>
						<button md-raised-button color="primary" (click)="createHTML()">Create HTML</button>
						<button md-raised-button color="primary" (click)="viewHTML()">View as HTML</button>
					</div>
				</div>
				{{textAnswer}}
				<div *ngIf="viewFlag">
					<view-template [editedTemplate]="template" (textAnswer) ="textAnswer"></view-template>
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