"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
let success;
class Filter {
    constructor() {
        success = "#message-notification-success-container";
    }
    filter(filterName, search) {
        $(`#filter-button-${filterName}`).click();
        $(`#${filterName}`).setValue(search);
        $(`#filter-button-${filterName}-submit`).click();
        browser.pause(500);
    }
    filterDelete() {
        if ($('[title="Edit"]').isDisplayed()) {
            $('[title="Edit"]').click();
            $('#button-record-delete').click();
            $('[label="Delete"]').click();
            expect($(`${success}`)).toBeVisible();
        }
    }
    filterClear() {
        $('#filters-clear-all-btn').click();
    }
}
exports.Filter = Filter;
