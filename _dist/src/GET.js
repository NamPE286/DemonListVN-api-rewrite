"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @openapi
 * /:
 *  get:
 *      summary: Get server's timestamp
 *      responses:
 *          200:
 *              description: App is up and running
 *              content:
 *                  application/json:
 *                      schema:
 */
async function default_1(req, res) {
    res.send({ timestamp: (new Date()).toISOString() });
}
exports.default = default_1;
//# sourceMappingURL=GET.js.map