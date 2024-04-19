import Login from "./pageObjects.js/LoginPage"

describe('My Fifth Test', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

    

    it('Opens Webpage', function() {
        
        
        
        const loginPage=new Login()

        cy.visit("https://staging.company.matchit.rs/login")


        loginPage.getLoginButton()
        loginPage.getEmptyEmailFieldError()




    })
})