import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { StateService } from './state.service';
import { SkillsService } from './skills.service';

const SERVICES = [UserService, StateService, SkillsService];

@NgModule({
    imports: [CommonModule],
    providers: [...SERVICES]
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: DataModule,
            providers: [...SERVICES]
        };
    }
}