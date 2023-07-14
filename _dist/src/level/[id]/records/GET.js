"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Level_1 = __importDefault(require("../../../../classes/Level"));
/**
 * @openapi
 * /level/{id}/records:
 *  get:
 *      tags:
 *      - Level
 *      summary: Get a level's records by ID
 *      parameters:
 *        - name: id
 *          in: path
 *          description: The ID of the level
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Sucessful operation
 *              content:
 *                  application/json:
 *                      schema:
 *          404:
 *              description: Invalid ID or level does not exist
 */
async function default_1(req, res) {
    const { id } = req.params;
    const level = new Level_1.default(parseInt(id));
    level.fetchRecords()
        .then(data => {
        res.send(JSON.stringify(data));
    })
        .catch(() => {
        res.status(404).send();
    });
}
exports.default = default_1;
//# sourceMappingURL=GET.js.map