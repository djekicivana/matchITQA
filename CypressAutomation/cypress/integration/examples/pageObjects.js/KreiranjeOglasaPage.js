class KreiranjeOglasa
{


getNazivPozicije()
{
   return cy.get('#job_offer_title')
}

getTehnologije1()
{
    return cy.get('#technologies_exp-5-technology').select('8').should('have.value', '8')
}



getTehnologije2()
{
   return cy.get('#technologies_exp-8-technology').select('9').should('have.value', '9')
}

getIskustvo1()
{
   return cy.get('#technologies_exp-5-years_of_experience').select('1').should('have.value', '1')
}

getIskustvo2()
{
   return cy.get('#technologies_exp-8-years_of_experience').select('3').should('have.value','3')
}

getTehnologije3()
{
   return cy.get('#technologies_exp-7-technology').select('18').should('have.value', '18')
}

getIskustvo3()
{
    cy.get('#technology_8 > .reset-technology').select('6').should('have.value','6')
}

getResetTechnology()
{
   return cy.get('#technology_8 > .reset-technology > .fa-solid')
}

getNazivProjekta()
{
   return cy.get('#project_title')
}

getOprojektu()
{
  return  cy.get('#project_description')
}

getCountry()
{
   return cy.get('#location_country')
}

getCity()
{
   return cy.get('#location_city')
}

getIndustry()
{
   return cy.get('#industry')
}

getTeamSize()
{
   return cy.get('#team_size')
}

getWorkEnviornment()
{
    return cy.get('#work_environment-1').check().should('be.checked').and('have.value', '3')
}

getNacinRazvojaProjekta()
{
    return cy.get('#development_type-0').click()
}

getTypeOfProject()
{
    return cy.get('#project_type').click()
}
getMinSalary()
{
    return cy.get('#salary_min')
}

getMaxSalary()
{
    return cy.get('#salary_max')
}

getShowSalaryCheckBox()
{
    return cy.get('#show_salary').uncheck().should('not.be.checked')
}

getBenefits1()
{
   return cy.get('#benefits-7').select('9').should('have.value', '9')
}

getBenefits2()
{
    return cy.get('#benefits-8').select('13').should('have.value', '13')
}

getBenefits3()
{
    return cy.get('#benefits-9').select('12').should('have.value', '12')
}

getResetBenefit()
{
   return  cy.get('#benefit_10 > .reset-benefit > .fa-solid').click()
}

getKreirajButton()
{
    return cy.get('#create_button').click()
}

getSaveDraftButton()
{
    return cy.get('#draft_button').click()
}

getOdbaciButton()
{
    return cy.get('.button-secondary > span').click()
}

getDraftSavedText()
{
    return cy.get('.mb-4').should('have.text', 'Oglas je uspešno sačuvan kao draft.')
}

getErrorMessage1()
{
    return cy.get('.ps-0').should('include.text' , 'Tehnologija i godine iskustva moraju biti popunjeni')
}

getErrorMessage2()
{
    return cy.get('.ps-0.mb-0').should('include.text' , 'Obavezno polje' )
}

}

export default KreiranjeOglasa;