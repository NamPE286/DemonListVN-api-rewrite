import { supabase } from "@db"
import selectStr from "@utils/selectStr"
import Record from "@classes/Record"

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
            throw new Error(error.message)
        }

        this.initialized = true
        Object.assign(this, data)

        return this
    }

    async fetchRecords(): Promise<Record[]> {
        const { data, error } = await supabase
            .from('records')
            .select('*')
            .eq('userid', this.uid)
            .eq('isChecked', false)

        if (error) {
            throw new Error(error.message)
        }

        var res: Record[] = []

        for (const i of data) {
            res.push(Object.assign(new Record('', 0), i))
        }

        return res
    }
}