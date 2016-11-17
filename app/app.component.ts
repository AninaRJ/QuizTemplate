import {Component} from '@angular/core';
import {NewTemplateComponent} from './new-template.component';

@Component({
	selector: 'quiz-app',
	template: `
		<html>
			<head><title><h1>Quiz Template</h1></title></head>
			<body>
				<div>Create New Template</div>
				<button (click)="toggleFlag(true)">New Template</button>
				<button (click)="toggleFlag(false)">Cancel</button>
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
