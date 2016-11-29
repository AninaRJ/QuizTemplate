import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TemplateService{
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	uploadImage(fileNames): Promise<void> {
		return this.http.post('/quizUploadImage', JSON.stringify(fileNames), {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	  }

}