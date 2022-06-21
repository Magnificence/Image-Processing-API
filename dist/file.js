"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageExistsThumb = exports.imageExistsFull = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fullPath = path_1.default.resolve(__dirname, '../assets/full');
const thumbPath = path_1.default.resolve(__dirname, '../assets/thumb');
function imageExistsFull(image) {
    const imagePath = path_1.default.join(fullPath, `${image}.jpg`);
    if (fs_1.default.existsSync(imagePath))
        return imagePath;
    return null;
}
exports.imageExistsFull = imageExistsFull;
function imageExistsThumb(image, width, height) {
    const imagePath = path_1.default.join(thumbPath, `${image}-${width}-${height}.jpg`);
    if (fs_1.default.existsSync(imagePath))
        return imagePath;
    return null;
}
exports.imageExistsThumb = imageExistsThumb;
