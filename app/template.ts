import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	templateUrl:"./app/newTemplate.html"
})

export class TemplateComponent{
	editedTemplate:string;
	constructor(private route: ActivatedRoute) {
		this.editedTemplate = route.snapshot.params['template']; 
	}
}