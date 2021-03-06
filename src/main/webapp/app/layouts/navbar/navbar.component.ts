import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService } from 'ng-jhipster';
import { AnalyticsService } from '../../shared/@core/utils/analytics.service';
import { SessionStorageService } from 'ngx-webstorage';

import { UserService } from '../../shared/@core/data/users.service';

import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { VERSION } from 'app/app.constants';
import { JhiLanguageHelper, AccountService, LoginModalService, LoginService } from 'app/core';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { JhiEventManager } from 'ng-jhipster';

@Component({
    selector: 'jhi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.scss']
})
export class NavbarComponent implements OnInit {
    @Input() position = 'normal';

    account: Account;
    user: any;

    inProduction: boolean;
    isNavbarCollapsed: boolean;
    languages: any[];
    swaggerEnabled: boolean;
    modalRef: NgbModalRef;
    version: string;

    constructor(
        private loginService: LoginService,
        private languageService: JhiLanguageService,
        private languageHelper: JhiLanguageHelper,
        private sessionStorage: SessionStorageService,
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private profileService: ProfileService,
        private router: Router,
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private userService: UserService,
        private analyticsService: AnalyticsService,
        private eventManager: JhiEventManager
    ) {
        this.version = VERSION ? 'v' + VERSION : '';
        this.isNavbarCollapsed = true;
    }

    ngOnInit() {
        this.userService.getUsers().subscribe((users: any) => (this.user = users.xavierm));

        this.languageHelper.getAll().then(languages => {
            this.languages = languages;
        });

        this.profileService.getProfileInfo().then(profileInfo => {
            this.inProduction = profileInfo.inProduction;
            this.swaggerEnabled = profileInfo.swaggerEnabled;
        });

        // this.principal.identity().then(account => {
        //     this.account = account;
        // });
        // this.registerAuthenticationSuccess();
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    }

    toggleSettings(): boolean {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    }

    startSearch() {
        this.analyticsService.trackEvent('startSearch');
    }

    changeLanguage(languageKey: string) {
        this.sessionStorage.store('locale', languageKey);
        this.languageService.changeLanguage(languageKey);
    }

    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    getImageUrl() {
        return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
    }

    // registerAuthenticationSuccess() {
    //     this.eventManager.subscribe('authenticationSuccess', message => {
    //         this.principal.identity().then(account => {
    //             this.account = account;
    //         });
    //     });
    // }
}
