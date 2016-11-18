import {Component, Output} from '@angular/core';

@Component({
	selector: 'answer-view',
	template: `<label><h4>Answer Target</h4></label>
				<md-radio-group [(ngModel)]="answerTarget">
				  <md-radio-button value="textInput" >Text Input</md-radio-button>
				  <md-radio-button value="urlChange" >URL Change</md-radio-button>
				  <md-radio-button value="clickEvent" >Click Event</md-radio-button>
				</md-radio-group>
				<md-card *ngIf="answerTarget == 'textInput'">
					<div>
						<md-input placeholder="What should be entered in the text?" [(ngModel)] = "textAnswer" ></md-input>
					</div>
				</md-card>
				<md-card *ngIf="answerTarget == 'urlChange'">
					<div>
						<md-input placeholder="Give me the url change"></md-input>
					</div>
				</md-card>
				`
})

export class AnswerComponent{
	answerTarget:string;
	@Output()
	textAnswer: string;
}