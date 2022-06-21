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
const express_1 = __importDefault(require("express"));
const file_1 = require("../../file");
const resizer_1 = __importDefault(require("../../resizer"));
const router = express_1.default.Router();
function validateQuery(query) {
    if (query.filename === null || query.filename === undefined || query.filename.length === 0) {
        return 'Incorrect Image Name!';
    }
    if (query.width === null ||
        query.width === undefined ||
        parseInt(query.width) < 0 ||
        query.width.length === 0) {
        return 'Incorrect Image Width!';
    }
    if (query.height === null ||
        query.height === undefined ||
        parseInt(query.height) < 0 ||
        query.height.length === 0) {
        return 'Incorrect Image Height!';
    }
    return false;
}
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const queryValidation = validateQuery(query);
    if (!queryValidation) {
        const imagePathFull = (0, file_1.imageExistsFull)(query.filename);
        if (imagePathFull) {
            const imagePathThumb = (0, file_1.imageExistsThumb)(query.filename, parseInt(query.width), parseInt(query.height));
            if (imagePathThumb) {
                res.status(200).sendFile(imagePathThumb);
                return;
            }
            else {
                const resizedImage = yield (0, resizer_1.default)(query.filename, parseInt(query.width), parseInt(query.height));
                if (resizedImage) {
                    res.status(200).sendFile(resizedImage);
                    return;
                }
                else {
                    res.status(400).send('Image could not be resized!');
                    return;
                }
            }
        }
        else {
            res.status(404).send('Error! Image does not exist!');
            return;
        }
    }
    else {
        res.status(400).send(queryValidation);
        return;
    }
}));
exports.default = router;
