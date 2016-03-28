﻿import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {SecurityService} from './services/SecurityService';
import {SecureFilesComponent} from './securefile/securefiles/securefiles.component';

import {DataEventRecordComponent} from './dataeventrecord/dataeventrecord.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/app.component.css']
})

@RouteConfig([
        { path: '/Forbidden', name: 'Forbidden', component: ForbiddenComponent },
        { path: '/Unauthorized', name: 'Unauthorized', component: UnauthorizedComponent },
        { path: '/securefile/securefiles', name: 'Securefiles', component: SecureFilesComponent },
        { path: '/dataeventrecords/...', name: 'Dataeventrecords', component: DataEventRecordComponent },
])
 
export class AppComponent {

    constructor(public securityService: SecurityService) {     
    }

    ngOnInit() {
        console.log("ngOnInit _securityService.AuthorizedCallback");

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }      
    }

    public Login() {
        console.log("Do login logic");
        this.securityService.Authorize(); 
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }
}