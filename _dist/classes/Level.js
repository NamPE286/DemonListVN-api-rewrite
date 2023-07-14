"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _db_1 = require("../db.js");
const Record_1 = __importDefault(require("./Record"));
class default_1 {
    constructor(id) {
        this.initialized = false;
        this.id = id;
    }
    async init() {
        if (this.initialized) {
            return this;
        }
        const { data, error } = await _db_1.supabase
            .from('levels')
            .select('id, name, creator, videoID, minProgress, flTop, dlTop, rating, ldm')
            .eq('id', this.id)
            .single();
        if (error) {
            throw error;
        }
        this.initialized = true;
        Object.assign(this, data);
        return this;
    }
    async fetchRecords() {
        const { data, error } = await _db_1.supabase
            .from('records')
            .select('*')
            .eq('levelid', this.id);
        if (error) {
            throw new Error(error.message);
        }
        var res = [];
        for (const i of data) {
            res.push(Object.assign(new Record_1.default('', 0), i));
        }
        return res;
    }
}
exports.default = default_1;
//# sourceMappingURL=Level.js.map