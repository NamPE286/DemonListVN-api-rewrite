import { supabase } from "@db"
import Record from "@classes/Record"

export default class {
    id: number
    name: string
    creator: string
    videoID: string
    minProgress: number
    flTop: number
    dlTop: number
    rating: number
    ldm: number[]
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
            .select('id, name, creator, videoID, minProgress, flTop, dlTop, rating, ldm')
            .eq('id', this.id)
            .single()

        if (error) {
            throw error
        }
        this.initialized = true
        Object.assign(this, data)
        return this
    }

    async fetchRecord(): Promise<Record[]> {
        const { data, error } = await supabase
            .from('records')
            .select('*')
            .eq('levelid', this.id)

        if (error) {
            throw error
        }

        var res: Record[] = []

        for (const i of data) {
            res.push(Object.assign(new Record('', 0), i))
        }

        return res
    }
}