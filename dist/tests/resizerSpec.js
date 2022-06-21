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
const resizer_1 = __importDefault(require("../resizer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
describe('Testing Image Resizer', () => __awaiter(void 0, void 0, void 0, function* () {
    it('[Valid] Checks if File is Resized (icelandwaterfall, 500, 500) || Returns Path', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagePath = yield (0, resizer_1.default)('icelandwaterfall', 500, 500);
        expect(imagePath).toBeTruthy();
    }));
}));
afterAll(() => {
    fs_1.default.unlinkSync(path_1.default.resolve(__dirname, '../../assets/thumb/icelandwaterfall-500-500.jpg'));
});
