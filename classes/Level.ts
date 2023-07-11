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

    async fetchData(): Promise<void> {
        const { data, error } = await supabase
            .from('levels')
            .select('*')
            .eq('id', this.id)
            .single()

        if (error) {
            throw error
        }

        Object.assign(this, data)
    }

    async fetchRecord(): Promise<Record[]> {
        const { data, error } = await supabase
            .from('records')
            .select('*')
            .eq('levelid', this.id)
        
        if(error){
            throw error
        }

        var res: Record[] = []
        for(const i of data){
            res.push(Object.assign(new Record('', 0), i))
        }
        return res
    }
}