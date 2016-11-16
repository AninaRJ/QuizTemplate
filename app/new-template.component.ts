import {Component} from '@angular/core';

@Component({
	selector: 'new-template-html',
	template: '<textarea rows="10" cols="50">{{template}}</textarea>'
})

export class NewTemplateComponent{
	template:string = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="ISO-8859-1">\n\t<title>Quiz Name</title>\n</head>\n<body>\n\tComing from template url\n</body>\n</html>';
}