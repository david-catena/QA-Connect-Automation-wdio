import {PageLoad} from '../classes/PageLoad'
import {Filter} from '../classes/Filter'
import {ObjectId} from '../classes/ObjectId'
import {PageFunction} from '../classes/PageFunction'
import {Variables} from '../classes/Variables'

let load = new PageLoad()
let filter = new Filter()
let page = new PageFunction()
let idFuntion = new ObjectId()
let variable = new Variables()

describe('Platform provider can allow for create', () => {
    it('loads up the connect site', () => {
        load.loadUrl('accounts/platform-providers')
    })

    it('removes any non deleted instances', () => {
        filter.filter('name', "1_Test_platform")
        filter.filterDelete()
        filter.filterClear()
    })
    
    it('should load up the create page', () => {
        load.create("name")
    })
    it('should allow for the creation of a new platform provider', () => {
        $('#name').setValue("1_Test_platform")
        page.save("success")
    })
    it('will allow for the saving of the object id', () => {
        idFuntion.setObjectId()
    })
    it('verifies that the entry can be edited', () => {
        variable.listView()
        idFuntion.editView()
        $('[name="name"]').addValue("_4")
        page.save("success")
        page.editInPage("2", '[name="name"]', 'no', "success")
        expect($('span=1_Test_platform_42')).toBeDisplayed()
    })
    it('verifies that the entry can be deleted', () => {
        idFuntion.showView()
        page.delete()
        expect($('span=1_Test_platform_42')).not.toBeDisplayed()
    })
})