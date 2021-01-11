"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends page_1.default {
    /**
     * define selectors using getter methods
     */
    get flashAlert() { return $('#flash'); }
}
exports.default = new SecurePage();
