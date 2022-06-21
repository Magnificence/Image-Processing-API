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
const file_1 = require("../file");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const resizer_1 = __importDefault(require("../resizer"));
describe('Testing File Checks || file.ts', () => {
    it('[Valid] Check for Image in Thumb Folder (palmtunnel) || Returns Path', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, resizer_1.default)('palmtunnel', 500, 500);
        expect((0, file_1.imageExistsThumb)('palmtunnel', 500, 500)).toBeTruthy();
    }));
    it('[Invalid] Check for invalid Image Thumb folder (random) || Returns NULL', () => {
        expect((0, file_1.imageExistsThumb)('random', 500, 500)).toBeFalsy();
    });
    it('[Valid] Check for Existent Image in Full Folder (fjord) || Returns Path', () => {
        expect((0, file_1.imageExistsFull)('fjord')).toBeTruthy();
    });
    it('[Invalid] Check for Non-existent Image (random) || Returns NULL', () => {
        expect((0, file_1.imageExistsFull)('random')).toBeFalsy();
    });
});
afterAll(() => {
    fs_1.default.unlinkSync(path_1.default.resolve(__dirname, '../../assets/thumb/palmtunnel-500-500.jpg'));
});
