"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectId = void 0;
let objId;
class ObjectId {
    setObjectId() {
        let id = browser.getUrl().split('/');
        objId = id[id.length - 2];
    }
    editView() {
        let edit = "icon-button-record-edit-" + objId;
        expect($(`#${edit}`)).toBeDisplayed();
        $(`#${edit}`).click();
    }
    showView() {
        let show = "icon-button-record-show-" + objId;
        $(`#${show}`).click();
    }
}
exports.ObjectId = ObjectId;
