export default class {
    levelid: number
    userid: string
    progress: number
    timestamp: number
    flPt: number
    dlPt: number
    refreshRate: number
    videoLink: string
    mobile: boolean
    isChecked: boolean
    comment: string
    constructor(userid: string, levelid: number) {
        this.levelid = levelid
        this.userid = userid
    }
}