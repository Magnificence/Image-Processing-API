"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./api/images"));
const router = express_1.default.Router();
router.use('/api/images', images_1.default);
router.get('/', (_req, res) => {
    res.status(200).send(`<h1>API is Online and Working Successfully!</h1>`);
    return;
});
exports.default = router;
