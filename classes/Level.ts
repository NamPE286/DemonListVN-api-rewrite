import { supabase } from "@db"
import Record from "@classes/Record"
import selectStr from "@utils/selectStr"

export default class {
    id: number = NaN
    name: string = ''
    creator: string = ''
    videoID: string = ''
    minProgress: number = NaN
    flTop: number = NaN
    dlTop: number = NaN
    rating: number = NaN
    ldm: number[] = []
    initialized: boolean = false

    constructor(id: number) {
        this.id = id
    }

    async init(): Promise<this> {
        if (this.initialized) {
            return this
        }

        const { data, error } = await supabase
            .from('levels')
            .select(selectStr(this))
            .eq('id', this.id)
            .single()

        if (error) {
            throw error
        }

        this.initialized = true
        Object.assign(this, data)

        return this
    }

    async fetchRecords(): Promise<Record[]> {
        const { data, error } = await supabase
            .from('records')
            .select('*')
            .eq('levelid', this.id)

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