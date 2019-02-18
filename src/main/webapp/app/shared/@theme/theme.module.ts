import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbSidebarModule,
    NbTabsetModule,
    NbThemeModule,
    NbUserModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbContextMenuModule
} from '@nebular/theme';

import { NbSecurityModule } from '@nebular/security';

import {
    SearchInputComponent,
    ThemeSettingsComponent,
    TinyMCEComponent,
    ThemeSwitcherComponent,
    SwitcherComponent,
    ThemeSwitchersComponent,
    ThemeSwitchersListComponent
} from './components';

import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';

import { OneColumnLayoutComponent, ThreeColumnsLayoutComponent, TwoColumnsLayoutComponent } from './layouts';

const PIPES = [CapitalizePipe, PluralPipe, RoundPipe, TimingPipe];

import { DEFAULT_THEME } from './../../../content/scss/theme/nebular/theme.default';
import { COSMIC_THEME } from './../../../content/scss/theme/nebular/theme.cosmic';
import { CORPORATE_THEME } from './../../../content/scss/theme/nebular/theme.corporate';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbCheckboxModule,
    NbPopoverModule,
    NbContextMenuModule,
    NgbModule,
    NbSecurityModule // *nbIsGranted directive
];

const COMPONENTS = [
    ThemeSwitcherComponent,
    ThemeSettingsComponent,
    SwitcherComponent,
    ThemeSwitchersComponent,
    ThemeSwitchersListComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent
];

const ENTRY_COMPONENTS = [ThemeSwitchersListComponent];

const NB_THEME_PROVIDERS = [
    ...NbThemeModule.forRoot(
        {
            name: 'corporate'
        },
        [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME]
    ).providers,
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers
];

@NgModule({
    imports: [...BASE_MODULES, ...NB_MODULES],
    exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES],
    entryComponents: [...ENTRY_COMPONENTS]
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [...NB_THEME_PROVIDERS]
        };
    }
}
