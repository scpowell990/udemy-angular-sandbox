import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
@Component({
    selector: 'app-user',

    //template: '<h2> John Doe</h2>'
    templateUrl: './user.component.html',//adding the html to the component

    // styles: [`
    //     h2{
    //         color: blue
    //     }`
    // ]
    styleUrls: ['./user.component.css'], //adding custom styles from a stye sheet
})
export class UserComponent implements OnInit {
    //properties
    user: User;

    //methods
    constructor() {
        this.user = {
            firstName: 'john',
            lastName: 'Doe',
            email:'blank@blank.com'
        }
    } 

    ngOnInit(){   
    }
}

