import {PageLoad} from '../classes/PageLoad.js'
import {Filter} from '../classes/Filter'
import {ObjectId} from '../classes/ObjectId'
import {PageFunction} from '../classes/PageFunction'
import {Variables} from '../classes/Variables'

let load = new PageLoad()
let filter = new Filter()
let page = new PageFunction()
let idFuntion = new ObjectId()
let variable = new Variables()

describe("I open up the affilaite page", () => {
    it("opens up the connect page", () => {
        load.loadUrl("accounts")
    })
    it("filters and deletes", ()=>{

    })
    it ("opens up the create page", () => {
        load.create("activity_status")
    })
})

describe("dulicate can not be saved", () => {
    it("enters all the details in the general tab", () => {
        page.dyanmicDrop("account_manager_id", "natasa.stojcic@catenamedia.com")
        page.staticDrop("activity_status", "active")
        page.dyanmicDrop("portfolio_id", "Arctic")
        page.dyanmicDrop("company_id", "Mansion")
        page.dyanmicDrop("platform_provider_id", "MyAffiliatesV2")
        $("#affiliate_system_link").setValue("https://www.mansionaffiliates.com/")
        $("#username").setValue("Flushdraw")
        $("#password").setValue("tested")
        $("#email").setValue("test@test.com")
        page.staticDrop("revenue_posting_code", "FINCOM")
        page.staticDrop("type", "auto")
    })
    it("enters all the details in the brand tab", () => {
        $("#simple-tab-1").click()
        $("#button-record-create").click()
        page.dynamicNonIdDrop('[aria-label="Brand"]', "slots")
    })
    it("saves with an error", () => {
        $('#simple-tab-0').click()
        page.save("error")
    })
})

describe("I change the company name",   () => {
    it("remove the brand", () => {
        $("#simple-tab-1").click()
        $("span=Remove").click()
        $("#simple-tab-0").click()
    })
    it("change the company name", () => {
        $("#company").click()
        page.dyanmicDrop("company_id", 'Administradora Wsport 2012')
    })
    it("adds the brand again", () =>{
        $("#simple-tab-1").click()
        $("#button-record-create").click()
        page.dynamicNonIdDrop('[aria-label="Brand"]', "Wcasino")
    })
    it("save successfuly", () => {
        page.save("success")
    })
    it("saves the objectId", () =>{
        idFuntion.setObjectId()
    })
    it("remove the new brand", () => {
        $("#button-record-edit").click()
        $("#simple-tab-1").click()
        $("span=Remove").click()
        $("#simple-tab-0").click()
    })
    it("change to the old company name", () => {
        $("#company").click()
        page.dyanmicDrop("company_id", "Mansion")
    })
    it("adds the old brand again", () =>{
        $("#simple-tab-1").click()
        $("#button-record-create").click()
        page.dynamicNonIdDrop('[aria-label="Brand"]', "slots")
    })
    it("save with an error", () => {
        $("#simple-tab-0").click()
        page.save("error")
    })
})

describe("I modify the username", () =>{
    it("changes the username", () => {
        $('[name="username"]').setValue("Flushdraw12")
    })

    it("saves successfully", () => {
        page.save("success")
    })
    it("changes back to the old username", () => {
        page.editInPage("Flushdraw",'[name="username"]', "yes", "error")
        $("#button-no-dialog").click()
    })
})

describe("I modify the platform provider", () =>{
    it("changes the platform provider", () => {
        $("#platform-provider").click()
        page.dyanmicDrop("platform_provider_id", "Bet365")
    })

    it("saves successfully", () => {
        page.save("success")
    })

    it("changes back to the old username", () => {
        $("#button-record-edit").click()
        $("#platform-provider").click()
        page.dyanmicDrop("platform_provider_id", "MyAffiliatesV2")
    })

    it("saves with an error", () => {
        page.save("error")
    })
})

describe("I modify the afilliate link and delete", () =>{
    it("changes the username", () => {
        $('[name="affiliate_system_link"]').setValue("https://www.test.com/test")
    })

    it("saves successfully", () => {
        page.save("success")
    })
    it("deletes successfully", () => {
        page.delete()
    })
})