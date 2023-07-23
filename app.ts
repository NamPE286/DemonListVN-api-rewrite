import express from 'npm:express'
import { checkUser, setCaching } from './middleware.ts'
import { join } from "https://deno.land/std@0.195.0/path/mod.ts";


const app = express()

async function* recursiveReaddir(path: string): AsyncGenerator<string, void> {
  for await (const dirEntry of Deno.readDir(path)) {
    if (dirEntry.isDirectory) {
      yield* recursiveReaddir(join(path, dirEntry.name));
    } else if (dirEntry.isFile) {
      yield join(path, dirEntry.name);
    }
  }
}

for await (const filePath of recursiveReaddir('./src')) {
  const reqPath: string = './' + filePath
    .split('\\')
    .join('/')
  const route: string = '/' + reqPath
    .split('/')
    .slice(2, -1)
    .join('/')
    .replaceAll('[', ':')
    .replaceAll(']', '')
    .replaceAll('{', ':')
    .replaceAll('}', '?')

  const fn = await import(reqPath)

  if (reqPath.endsWith('GET.ts', reqPath.length)) {
    app.get(route, setCaching, fn.default)
  }
  if (reqPath.endsWith('POST.ts', reqPath.length)) {
    app.post(route, checkUser, fn.default)
  }
  if (reqPath.endsWith('PUT.ts', reqPath.length)) {
    app.put(route, checkUser, fn.default)
  }
  if (reqPath.endsWith('DELETE.ts', reqPath.length)) {
    app.delete(route, checkUser, fn.default)
  }

  console.log(`Loaded path ${reqPath} to route ${route}`)
}

export default app