import {PageLoad} from '../classes/PageLoad.js'
import {PageFunction} from '../classes/PageFunction'

let load = new PageLoad()
let page = new PageFunction()

describe("I can make various searches", () => {
    it("loads up connect", () => {
        load.loadUrl("accounts/search")
    })
    it ("does the first search", () => {
        page.makeAdvancedSearch("latestbettingsites", "LBS - latestbettingsites")
        browser.pause(2000)
        $('#advanced-search').doubleClick()
        browser.keys(['Delete'])
    })
    it ("does the second search", () => {
        page.makeAdvancedSearch("askgamblers", "ASK - askgamblers")
        $('#advanced-search').doubleClick()
        browser.keys(['Delete'])
    })
    it ("does the third search", () => {
        page.makeAdvancedSearch("egnite", "BAYBETS - egnite")
        $('#advanced-search').doubleClick()
        browser.keys(['Delete'])
    })
    it ("does the fourth search", () => {
        page.makeAdvancedSearch("BrokerDeal", "BROKER - BrokerDeal")
    })
})