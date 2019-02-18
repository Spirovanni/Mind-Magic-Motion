import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

let counter = 0;

@Injectable()
export class SkillsService {
    private skills = {
        ang_js_yellow_1: {
            name: 'AngularJS 001_01',
            skill_id: '01.01.00',
            picture: '../../../content/images/tech-icons/angularjs-1.png',
            school_picture: '../../../content/images/schools/clovis_community.png',
            school_name: 'Clovis Community College'
        },
        ang_js_yellow_2: {
            name: 'AngularJS 001_02',
            skill_id: '01.01.01',
            picture: '../../../content/images/tech-icons/angularjs-2.png',
            school_picture: '../../../content/images/schools/clovis_unified.png',
            school_name: 'Clovis Unified School District'
        },
        ang_js_yellow_3: {
            name: 'AngularJS 001_03',
            skill_id: '01.01.02',
            picture: '../../../content/images/tech-icons/fresno_state.png',
            school_picture: '../../../content/images/schools/clovis_community.png',
            school_name: 'Clovis Community College'
        },
        html_yellow_1: {
            name: 'HTML 001_01   ',
            skill_id: '01.02.01',
            picture: '../../../content/images/tech-icons/HTML5-orange-1.png',
            school_picture: '../../../content/images/schools/central_adult.png',
            school_name: 'Central Adult School'
        }
    };

    private skillArray: any[];

    constructor() {
        // this.skillArray = Object.values(this.skills);
    }

    getSkills(): Observable<any> {
        return observableOf(this.skills);
    }

    getSkillArray(): Observable<any[]> {
        return observableOf(this.skillArray);
    }

    getSkill(): Observable<any> {
        counter = (counter + 1) % this.skillArray.length;
        return observableOf(this.skillArray[counter]);
    }
}
