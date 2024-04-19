import Login from "./pageObjects.js/LoginPage"
import SviOglasi from "./pageObjects.js/SviOglasiPage"

describe('My Fifth Test', function() {

    before(function()  {
       cy.visit("https://staging.company.matchit.rs/login/b4bd56dc-c567-49da-a7da-a518f06696e0")
    })

    

    it('Opens Webpage', function() {
        
        
        
        const loginPage = new Login()
        const sviOglasiPage = new SviOglasi()

        sviOglasiPage.getMenuButton()
        sviOglasiPage.getLogoutButton()
        loginPage.getLoginText()





    })
})