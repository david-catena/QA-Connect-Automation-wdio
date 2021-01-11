export class PageLoad {
    
    loadUrl(destination: string) {
        browser.url(browser.config.baseUrl + destination)
        browser.fullscreenWindow()
        expect(browser).toHaveTitle('Catena Connect')
    }

    create(clickName: string) {
        $('#button-record-create').click()
        expect($(`#${clickName}`)).toBeClickable()
    }
}