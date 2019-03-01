import { IPlayerMySuffix } from 'app/shared/models/player-my-suffix.model';

export interface IGuildMySuffix {
    id?: number;
    guildImageContentType?: string;
    guildImage?: any;
    guildName?: string;
    streetAddress?: string;
    postalCode?: string;
    city?: string;
    region?: string;
    stateProvince?: string;
    players?: IPlayerMySuffix[];
}

export class GuildMySuffix implements IGuildMySuffix {
    constructor(
        public id?: number,
        public guildImageContentType?: string,
        public guildImage?: any,
        public guildName?: string,
        public streetAddress?: string,
        public postalCode?: string,
        public city?: string,
        public region?: string,
        public stateProvince?: string,
        public players?: IPlayerMySuffix[]
    ) {}
}
