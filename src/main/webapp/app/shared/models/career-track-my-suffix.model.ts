import { ITaskMySuffix } from 'app/shared/model//task-my-suffix.model';

export interface ICareerTrackMySuffix {
    id?: number;
    careerTitle?: string;
    careerImageContentType?: string;
    careerImage?: any;
    minSalary?: number;
    maxSalary?: number;
    playerId?: number;
    tasks?: ITaskMySuffix[];
}

export class CareerTrackMySuffix implements ICareerTrackMySuffix {
    constructor(
        public id?: number,
        public careerTitle?: string,
        public careerImageContentType?: string,
        public careerImage?: any,
        public minSalary?: number,
        public maxSalary?: number,
        public playerId?: number,
        public tasks?: ITaskMySuffix[]
    ) {}
}
