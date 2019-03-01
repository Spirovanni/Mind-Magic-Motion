import { Moment } from 'moment';

export const enum Language {
    ENGLISH = 'ENGLISH',
    SPANISH = 'SPANISH',
    HMONG = 'HMONG'
}

export interface IJobHistoryMySuffix {
    id?: number;
    jobTitle?: string;
    jobDescription?: string;
    startDate?: Moment;
    endDate?: Moment;
    language?: Language;
    playerId?: number;
}

export class JobHistoryMySuffix implements IJobHistoryMySuffix {
    constructor(
        public id?: number,
        public jobTitle?: string,
        public jobDescription?: string,
        public startDate?: Moment,
        public endDate?: Moment,
        public language?: Language,
        public playerId?: number
    ) {}
}
