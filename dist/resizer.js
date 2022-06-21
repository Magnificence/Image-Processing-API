"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fullPath = path_1.default.resolve(__dirname, '../assets/full/');
const thumbPath = path_1.default.resolve(__dirname, '../assets/thumb/');
function resizer(image, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagePath = path_1.default.resolve(thumbPath, `${image}-${width}-${height}.jpg`);
            yield (0, sharp_1.default)(path_1.default.resolve(fullPath, `${image}.jpg`))
                .resize(width, height)
                .toFile(imagePath);
            return path_1.default.resolve(imagePath);
        }
        catch (err) {
            return null;
        }
    });
}
exports.default = resizer;
