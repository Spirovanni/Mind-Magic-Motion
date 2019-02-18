import { Component, Input } from '@angular/core';
import { NbThemeService, NbPopoverDirective } from '@nebular/theme';
import { AnalyticsService } from '../../../../@core/utils/analytics.service';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

@Component({
    selector: 'jhi-theme-switchers-list',
    template: `
        <ul class="themes-switchers-list">
            <li class="themes-switchers-item" *ngFor="let theme of themes" (click)="onToggleTheme(theme.key)">
                <i class="fa fa-shield"></i>
                <span>{{ theme.title }}</span>
            </li>
        </ul>
    `,
    styleUrls: ['./theme-switchers-list.component.scss']
})
export class ThemeSwitchersListComponent {
    @Input() popover: NbPopoverDirective;

    theme: NbJSThemeOptions;

    themes = [
        {
            title: 'Light',
            key: 'default'
        },
        {
            title: 'Cosmic',
            key: 'cosmic'
        },
        {
            title: 'Dark',
            key: 'corporate'
        }
    ];

    constructor(private themeService: NbThemeService, private analyticsService: AnalyticsService) {}

    onToggleTheme(themeKey: string) {
        this.themeService.changeTheme(themeKey);
        this.analyticsService.trackEvent('switchTheme');
        this.popover.hide();
    }
}
