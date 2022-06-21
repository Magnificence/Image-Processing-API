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
const fs_1 = __importDefault(require("fs"));
const supertest_1 = __importDefault(require("supertest"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Testing Endpoint Responses || index.ts -> images.ts', () => {
    it('[Valid] API Health Check || Returns 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/');
        expect(response.status).toBe(200);
    }));
    it('[Valid] Image Query (fjord, 500, 500) || Returns 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/?filename=fjord&width=500&height=500');
        expect(response.status).toBe(200);
    }));
    it('[Invalid] Image Does not Exist Query (haha,500,500) || Returns 404', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/?filename=haha&width=500&height=500');
        expect(response.status).toBe(404);
    }));
    it('[Invalid] Image Query without Dimensions (fjord, 500, 500) || Returns 400', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/?filename=fjord&width=&height=');
        expect(response.status).toBe(400);
    }));
});
afterAll(() => {
    fs_1.default.unlinkSync(path_1.default.resolve(__dirname, '../../assets/thumb/fjord-500-500.jpg'));
});
