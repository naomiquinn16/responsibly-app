import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class FeatureToggleGuardService implements CanActivate {

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        let url = state.url;

        if(url.indexOf('/team/') > -1) {
            return this.allowRoute();
        }

        return true;
    }

    allowRoute(): boolean {
        if (environment.feature.activateTeamSection == true) {
            return true;
        }

        console.warn("Feature A has been disabled");

        return false;
    }

}