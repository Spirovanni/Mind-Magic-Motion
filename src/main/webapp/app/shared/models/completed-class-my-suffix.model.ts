export interface ICompletedClassMySuffix {
    id?: number;
    classTitle?: string;
    classDescription?: string;
    htmlFirstShldLevel1?: number;
    htmlFirstShldLevel2?: number;
    htmlFirstShldLevel3?: number;
    htmlSecondShldLevel1?: number;
    htmlSecondShldLevel2?: number;
    htmlSecondShldLevel3?: number;
    htmlThirdShldLevel1?: number;
    htmlThirdShldLevel2?: number;
    htmlThirdShldLevel3?: number;
    cssFirstShldLevel1?: number;
    cssFirstShldLevel2?: number;
    cssFirstShldLevel3?: number;
    cssSecondShldLevel1?: number;
    cssSecondShldLevel2?: number;
    cssSecondShldLevel3?: number;
    cssThirdShldLevel1?: number;
    cssThirdShldLevel2?: number;
    cssThirdShldLevel3?: number;
    jsFirstShldLevel1?: number;
    jsFirstShldLevel2?: number;
    jsFirstShldLevel3?: number;
    jsSecondShldLevel1?: number;
    jsSecondShldLevel2?: number;
    jsSecondShldLevel3?: number;
    jsThirdShldLevel1?: number;
    jsThirdShldLevel2?: number;
    jsThirdShldLevel3?: number;
    schoolId?: number;
    playerId?: number;
}

export class CompletedClassMySuffix implements ICompletedClassMySuffix {
    constructor(
        public id?: number,
        public classTitle?: string,
        public classDescription?: string,
        public htmlFirstShldLevel1?: number,
        public htmlFirstShldLevel2?: number,
        public htmlFirstShldLevel3?: number,
        public htmlSecondShldLevel1?: number,
        public htmlSecondShldLevel2?: number,
        public htmlSecondShldLevel3?: number,
        public htmlThirdShldLevel1?: number,
        public htmlThirdShldLevel2?: number,
        public htmlThirdShldLevel3?: number,
        public cssFirstShldLevel1?: number,
        public cssFirstShldLevel2?: number,
        public cssFirstShldLevel3?: number,
        public cssSecondShldLevel1?: number,
        public cssSecondShldLevel2?: number,
        public cssSecondShldLevel3?: number,
        public cssThirdShldLevel1?: number,
        public cssThirdShldLevel2?: number,
        public cssThirdShldLevel3?: number,
        public jsFirstShldLevel1?: number,
        public jsFirstShldLevel2?: number,
        public jsFirstShldLevel3?: number,
        public jsSecondShldLevel1?: number,
        public jsSecondShldLevel2?: number,
        public jsSecondShldLevel3?: number,
        public jsThirdShldLevel1?: number,
        public jsThirdShldLevel2?: number,
        public jsThirdShldLevel3?: number,
        public schoolId?: number,
        public playerId?: number
    ) {}
}
