import { supabase } from "@db"
import selectStr from "@utils/selectStr"

export default class {
    name: string = ''
    facebook: string = ''
    youtube: string = ''
    discord: string = ''
    totalFLpt: number = NaN
    totalDLpt: number = NaN
    flrank: number = NaN
    dlrank: number = NaN
    uid: string = ''
    isAdmin: boolean = false
    isHidden: boolean = false
    rating: number = NaN
    overallRank: number = NaN
    province: string = ''
    city: string = ''
    initialized: boolean = false

    constructor(uid: string) {
        this.uid = uid
    }

    async init(): Promise<this> {
        if (this.initialized) {
            return this
        }

        const { data, error } = await supabase
            .from('players')
            .select(selectStr(this))
            .eq('uid', this.uid)
            .single()

        if (error) {
            throw error
        }

        this.initialized = true
        Object.assign(this, data)

        return this
    }
}