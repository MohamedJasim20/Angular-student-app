

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Jasim",
		last_name : "Jahir",
		email : "jasim@mail.com",
		phone : 9503733178,
		department : "Science"
	},
	{
		id : 2,
		first_name : "syed",
		last_name : "amar",
		email : "syed@mail.com",
		phone : 8574889658,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "ram",
		last_name : "kumar",
		email : "ram@mail.com",
		phone : 7485889658,
		department : "Science"
	},
	{
		id : 4,
		first_name : "John",
		last_name : "Doe",
		email : "john@mail.com",
		phone : 9685589748,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Peter",
		last_name : "Parker",
		email : "peter@mail.com",
		phone : 8595856547,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

