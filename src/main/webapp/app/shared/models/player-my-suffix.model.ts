import { Moment } from 'moment';
import { ICareerTrackMySuffix } from 'app/shared/models/career-track-my-suffix.model';
import { ICompletedClassMySuffix } from 'app/shared/models/completed-class-my-suffix.model';

export const enum PlayerType {
    RECONDO = 'RECONDO',
    ALCHEMIST = 'ALCHEMIST',
    CHARGER = 'CHARGER',
    PATHFINDER = 'PATHFINDER',
    RAINMAKER = 'RAINMAKER',
    ARCHITECT = 'ARCHITECT',
    NAVIGATOR = 'NAVIGATOR',
    MOTIVATOR = 'MOTIVATOR',
    OPERATIVE = 'OPERATIVE'
}

export interface IPlayerMySuffix {
    id?: number;
    profileImageContentType?: string;
    profileImage?: any;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    playerType?: PlayerType;
    goalDate?: Moment;
    salary?: number;
    commissionPct?: number;
    guildId?: number;
    careertracks?: ICareerTrackMySuffix[];
    completedclasses?: ICompletedClassMySuffix[];
    managerId?: number;
}

export class PlayerMySuffix implements IPlayerMySuffix {
    constructor(
        public id?: number,
        public profileImageContentType?: string,
        public profileImage?: any,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public playerType?: PlayerType,
        public goalDate?: Moment,
        public salary?: number,
        public commissionPct?: number,
        public guildId?: number,
        public careertracks?: ICareerTrackMySuffix[],
        public completedclasses?: ICompletedClassMySuffix[],
        public managerId?: number
    ) {}
}
