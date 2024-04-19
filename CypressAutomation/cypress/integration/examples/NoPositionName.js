import KreiranjeOglasa from "./pageObjects.js/KreiranjeOglasaPage"
describe('My Fourth Test', function() {

    before(function()  {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })


    it('Opens Webpage', function() {
        
        const kreiranjeOglasaPage=new KreiranjeOglasa()
        
       cy.visit("https://staging.company.matchit.rs/login/b4bd56dc-c567-49da-a7da-a518f06696e0");



        kreiranjeOglasaPage.getKreiranjeOglasaButton().click()
        kreiranjeOglasaPage.getTehnologije1()
        kreiranjeOglasaPage.getIskustvo1()
        kreiranjeOglasaPage.getTehnologije2()
        kreiranjeOglasaPage.getIskustvo2()
        kreiranjeOglasaPage.getNazivProjekta().type(this.data.projectName)
        kreiranjeOglasaPage.getOprojektu().type(this.data.aboutProject)
        kreiranjeOglasaPage.getCountry().select(["Srbija"])
        kreiranjeOglasaPage.getCity().select(["Beograd"])
        kreiranjeOglasaPage.getIndustry().select(["Mobile"])
        kreiranjeOglasaPage.getTeamSize().type("5")
        kreiranjeOglasaPage.getWorkEnviornment()
        kreiranjeOglasaPage.getNacinRazvojaProjekta()
        kreiranjeOglasaPage.getTypeOfProject()
        kreiranjeOglasaPage.getMinSalary().type(this.data.minSalary)
        kreiranjeOglasaPage.getMaxSalary().type(this.data.maxSalary)
        kreiranjeOglasaPage.getShowSalaryCheckBox()
        kreiranjeOglasaPage.getBenefits1()
        kreiranjeOglasaPage.getBenefits2()
        kreiranjeOglasaPage.getBenefits3()
        kreiranjeOglasaPage.getKreirajButton()
        kreiranjeOglasaPage.getErrorMessage2()


    })
})