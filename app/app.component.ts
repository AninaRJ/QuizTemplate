import {Component} from '@angular/core';
import {NewTemplateComponent} from './new-template.component';

@Component({
	selector: 'quiz-app',
	template: `
		<html>
			<head><title><h1>Quiz Template</h1></title></head>
			<body>
				<div>Create New Template</div>
				<button (click)="displayNewTemplate()">New Template</button>
				<div *ngIf="newTemplateFlag">
					<new-template-html></new-template-html>
					<div>
						<button (click)="resetTemplate()">Reset</button>
						<button (click)="createHTML()">Create HTML</button>
						<button (click)="viewHTML()">View as HTML</button>
					</div>
				</div>
			</body>
		</html>
	`
})

export class AppComponent{
	newTemplateFlag:boolean;
	
	ngOnInit(): void {
		this.newTemplateFlag = false;
	}
	
	displayNewTemplate(): void {
		this.newTemplateFlag = true;
    }
}
