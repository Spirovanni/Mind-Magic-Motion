import { ICompletedClassMySuffix } from 'app/shared/model//completed-class-my-suffix.model';

export interface ISchoolMySuffix {
    id?: number;
    schoolImageContentType?: string;
    schoolImage?: any;
    schoolName?: string;
    completedclasses?: ICompletedClassMySuffix[];
}

export class SchoolMySuffix implements ISchoolMySuffix {
    constructor(
        public id?: number,
        public schoolImageContentType?: string,
        public schoolImage?: any,
        public schoolName?: string,
        public completedclasses?: ICompletedClassMySuffix[]
    ) {}
}
