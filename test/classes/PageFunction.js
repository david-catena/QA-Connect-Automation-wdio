"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFunction = void 0;
let success;
let err;
let warning;
let count;
class PageFunction {
    constructor() {
        success = "#message-notification-success-container";
        err = "#message-notification-error-container";
        warning = "#message-notification-warning-container";
        count = 0;
    }
    save(result) {
        $('#button-record-save').click();
        if (result === "success") {
            expect($(`${success}`)).toBeVisible();
        }
        else if (result === "error") {
            expect($(`${err}`)).toBeVisible();
        }
        else {
        }
    }
    delete() {
        $('#button-record-delete').click();
        $('[label="Delete"]').click();
        expect($(`${success}`)).toBeVisible();
    }
    editInPage(newEdit, fieldEdit, clear, result) {
        $('#button-record-edit').click();
        if (clear === 'yes') {
            $(`${fieldEdit}`).clearValue();
        }
        $(`${fieldEdit}`).addValue(newEdit);
        this.save(result);
        $('#button-record-list').click();
    }
    editDynamicInPage(newEdit, fieldEdit, clear, result) {
        $('#button-record-edit').click();
        if (clear === 'yes') {
            $(`${fieldEdit}`).clearValue();
        }
        $(`${fieldEdit}`).addValue(newEdit);
        this.save(result);
        $('#button-record-list').click();
    }
    makeAdvancedSearch(search, result) {
        $("#advanced-search").setValue(search);
        $(".advanced-search").click();
        expect($(`span=${result}`)).toBeDisplayed();
    }
    staticDrop(id, selection) {
        $(`#${id}`).click();
        $(`[data-value=${selection}]`).click();
    }
    dyanmicDrop(id, selection) {
        $(`#${id}`).setValue(selection);
        browser.pause(1000);
        browser.keys(['Enter']);
        if (($(`#${id}-helper-text`)).isDisplayed() && count <= 2) {
            this.dyanmicDrop(id, selection);
            count++;
            console.log(`The current amount of iterations is ${count}`);
        }
    }
    dynamicNonIdDrop(selector, selection) {
        $(`${selector}`).setValue(selection);
        browser.pause(1000);
        browser.keys(["Enter"]);
    }
}
exports.PageFunction = PageFunction;
