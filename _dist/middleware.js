"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCaching = exports.checkUser = void 0;
function checkUser(req, res, next) {
    next();
}
exports.checkUser = checkUser;
function setCaching(req, res, next) {
    res.set('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=3600');
    next();
}
exports.setCaching = setCaching;
//# sourceMappingURL=middleware.js.map