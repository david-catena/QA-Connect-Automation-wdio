"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLoad = void 0;
class PageLoad {
    loadUrl(destination) {
        browser.url(browser.config.baseUrl + destination);
        browser.fullscreenWindow();
        expect(browser).toHaveTitle('Catena Connect');
    }
    create(clickName) {
        $('#button-record-create').click();
        expect($(`#${clickName}`)).toBeClickable();
    }
}
exports.PageLoad = PageLoad;
