import SviOglasi from "./pageObjects.js/SviOglasiPage"

describe('My Second Test', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

    

    it('Opens Webpage', function() {
        
        
        const sviOglasiPage=new SviOglasi()

        cy.visit("https://staging.company.matchit.rs/login/b4bd56dc-c567-49da-a7da-a518f06696e0");

        sviOglasiPage.getSviOglasiText()
        sviOglasiPage.getMenuButton()
        sviOglasiPage.getProfilRegrutera()







    })
})