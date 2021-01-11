"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("./page"));
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends page_1.default {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}
exports.default = new LoginPage();
