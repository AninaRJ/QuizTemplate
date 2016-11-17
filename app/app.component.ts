import {Component} from '@angular/core';
import {NewTemplateComponent} from './new-template.component';

@Component({
	selector: 'quiz-app',
	template: `
		<html>
			<head><title><h1>Quiz Template</h1></title></head>
			<body>
				<div class="mainLayout">
					<h1>Create New Template</h1>
					<button md-raised-button color="primary" (click)="toggleFlag(true)">Create</button>
					<button md-raised-button color="primary" (click)="toggleFlag(false)">Cancel</button>
				</div>
				<div *ngIf="newTemplateFlag">
					<new-template-html></new-template-html>
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
	
	toggleFlag(toggFlag:boolean): void {
		this.newTemplateFlag = toggFlag;
    }
}
