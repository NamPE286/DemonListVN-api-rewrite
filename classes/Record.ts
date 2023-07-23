export default class {
    levelid: number = NaN
    userid: string = ''
    progress: number = NaN
    timestamp: number = NaN
    flPt: number = NaN
    dlPt: number = NaN
    refreshRate: number = NaN
    videoLink: string = ''
    mobile: boolean = false
    isChecked: boolean = false
    comment: string = ''
    
    constructor(userid: string, levelid: number) {
        this.levelid = levelid
        this.userid = userid
    }
}