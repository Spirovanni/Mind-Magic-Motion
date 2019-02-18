import { Component, Input, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

import { ThemeSwitchersListComponent } from './themes-switcher-list/theme-switchers-list.component';

@Component({
    selector: 'jhi-themes-switchers',
    templateUrl: './theme-switchers.component.html',
    styleUrls: ['./theme-switchers.component.scss']
})
export class ThemeSwitchersComponent {
    @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

    @Input() showTitle: true;

    switcherListComponent = ThemeSwitchersListComponent;
    theme: NbJSThemeOptions;
}
