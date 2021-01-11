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


describe ("I can create an account manager", () => {
    it('can load up connect', () => {
        load.loadUrl('accounts/account-managers')
    })

    it("can fileter and delete", () =>{
        filter.filter('email', '1atest@tester.co.uk')
        filter.filterDelete()
        filter.filterClear()
        filter.filter('email', '1atest@tester.com')
        filter.filterDelete()
        //filter.filterClear()
    })

    it('can open up the creat page', () => {
        load.create("email")
    })

    it('can create a new account manager', () => {
        $('#email').setValue('1atest@tester.com')
        page.save("success")
    })
    it('will allow for the saving of the object id', () => {
        idFuntion.setObjectId()
        variable.listView()
    })
})

describe("I can edit an entry", () => {
    it("can edit from the listview", () =>{
        idFuntion.editView()
        $('[name="email"]').addValue(".mt")
        page.save("success")
    })
    it("can edit in page", () =>{
        page.editInPage("1atest@tester.co.uk", '[name="email"]', 'yes', "success")
        filter.filterClear()
        filter.filter('email', '1atest@tester.co.uk')
        browser.pause(1000)
        expect($('span=1atest@tester.co.uk')).toBeDisplayed()
    })
})

describe("I can delete the entry", () => {
    it("can be deleted", () =>{
        idFuntion.showView()
        page.delete()
        expect($('span=1atest@tester.co.uk')).not.toBeDisplayed()
    })
})