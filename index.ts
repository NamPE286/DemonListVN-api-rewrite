import express from 'express'
import dotenv from 'dotenv';
import fs from 'fs'
import path from 'path'
import { checkUser, setCaching } from './middleware';

dotenv.config()

const app = express()

function* walkSync(dir: string): Generator<string> {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path.join(dir, file.name));
        } else {
            yield path.join(dir, file.name);
        }
    }
}

for (const filePath of walkSync('./src')) {
    var reqPath: string = './' + filePath
        .split('\\')
        .join('/')
        .slice(0, -3)
    var route: string = '/' + reqPath
        .split('/')
        .slice(2, -1)
        .join('/')
        .replaceAll('[', ':')
        .replaceAll(']', '')
        .replaceAll('{', ':')
        .replaceAll('}', '?')
        
    import(reqPath).then(fn => {
        if (reqPath.endsWith('GET', reqPath.length)) {
            app.get(route, setCaching, fn.default)
        }
        if (reqPath.endsWith('POST', reqPath.length)) {
            app.post(route, checkUser, fn.default)
        }
        if (reqPath.endsWith('PUT', reqPath.length)) {
            app.put(route, checkUser, fn.default)
        }
        if (reqPath.endsWith('DELETE', reqPath.length)) {
            app.delete(route, checkUser, fn.default)
        }
    })
    console.log(`Loaded path ${reqPath} to route ${route}`)
}

app.listen(
    5050,
    () => {
        console.log(`Server running on http://localhost:5050`)
    }
)