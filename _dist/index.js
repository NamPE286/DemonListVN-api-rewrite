"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const middleware_1 = require("./middleware");
const swagger_1 = __importDefault(require("./utils/swagger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
function* walkSync(dir) {
    const files = fs_1.default.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path_1.default.join(dir, file.name));
        }
        else {
            yield path_1.default.join(dir, file.name);
        }
    }
}
for (const filePath of walkSync('./src')) {
    var reqPath = './' + filePath
        .split('\\')
        .join('/')
        .slice(0, -3);
    var route = '/' + reqPath
        .split('/')
        .slice(2, -1)
        .join('/')
        .replaceAll('[', ':')
        .replaceAll(']', '')
        .replaceAll('{', ':')
        .replaceAll('}', '?');
    if (reqPath.endsWith('GET', reqPath.length)) {
        app.get(route, middleware_1.setCaching, require(reqPath).default);
    }
    if (reqPath.endsWith('POST', reqPath.length)) {
        app.post(route, middleware_1.checkUser, require(reqPath).default);
    }
    if (reqPath.endsWith('PUT', reqPath.length)) {
        app.put(route, middleware_1.checkUser, require(reqPath).default);
    }
    if (reqPath.endsWith('DELETE', reqPath.length)) {
        app.delete(route, middleware_1.checkUser, require(reqPath).default);
    }
    console.log(`Loaded path ${reqPath} to route ${route}`);
}
app.listen(5050, () => {
    console.log(`Server running on http://localhost:5050`);
    (0, swagger_1.default)(app, 5050);
});
//# sourceMappingURL=index.js.map