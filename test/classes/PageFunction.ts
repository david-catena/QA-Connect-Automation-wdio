let success: string
let err: string
let warning: string
let count: number

export class PageFunction {

    constructor() {
        success = "#message-notification-success-container"
        err = "#message-notification-error-container"
        warning = "#message-notification-warning-container"
        count = 0
    }

    save(result: "success" | "error" | "warning") {
        $('#button-record-save').click()
        if (result === "success") {
            expect($(`${success}`)).toBeVisible()
        } else if (result === "error") {
            expect($(`${err}`)).toBeVisible()
        } else {

        }    
    }

    delete() {
        $('#button-record-delete').click()
        $('[label="Delete"]').click()
        expect($(`${success}`)).toBeVisible()
    }

    editInPage(newEdit: string, fieldEdit: string, clear: 'yes' | 'no', result: "success" | "error" | "warning") {
        $('#button-record-edit').click()
        if (clear === 'yes') {
            $(`${fieldEdit}`).clearValue() 
        }
        $(`${fieldEdit}`).addValue(newEdit)
        this.save(result)
        $('#button-record-list').click()
    }

    editDynamicInPage(newEdit: string, fieldEdit: string, clear: 'yes' | 'no', result: "success" | "error" | "warning") {
        $('#button-record-edit').click()
        if (clear === 'yes') {
            $(`${fieldEdit}`).clearValue() 
        }
        $(`${fieldEdit}`).addValue(newEdit)
        this.save(result)
        $('#button-record-list').click()
    }

    makeAdvancedSearch(search: string, result: string) {
        $("#advanced-search").setValue(search)
        $(".advanced-search").click()
        expect($(`span=${result}`)).toBeDisplayed()
    }

    staticDrop(id: string, selection: string) {
        $(`#${id}`).click()
        $(`[data-value=${selection}]`).click()
    }

    dyanmicDrop(id: string, selection: string) {
        $(`#${id}`).setValue(selection)
        browser.pause(1000)
        browser.keys(['Enter'])
        if(($(`#${id}-helper-text`)).isDisplayed() && count <= 2) {
            this.dyanmicDrop(id, selection)
            count++
            console.log(`The current amount of iterations is ${count}`)
        }       
    }

    dynamicNonIdDrop(selector: string, selection: string) {
        $(`${selector}`).setValue(selection)
        browser.pause(1000)
        browser.keys(["Enter"])
    }

}