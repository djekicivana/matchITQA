class ProfilRegrutera {

getFirstNameField()

{
    return cy.get('#first_name')
}

getLastNameField()

{
    return cy.get('#last_name')
}

getRecruiterEmailFieldl()

{
    return cy.get('#email')
}

getPhoneNumberField()

{
    return cy.get('#phone_number')
}

getSaveButton()

{
    return cy.get('#phone_number').click()
}

getOglasiButton()

{
    return cy.get(':nth-child(1) > .sidebar__item-button > span').click()
}

getPoklapanjaButton()

{
    return cy.get(':nth-child(1) > .sidebar__item-button > span').click()
}

getMenuButton() 

{
    return cy.get('.justify-content-center > .fa-solid').click()
}

getFirstNameErrorMessage()

{
    return cy.get(':nth-child(2) > .ps-0 > li').should('contain.text' , 'Obavezno polje')
}

getLastNameErrorMessage()

{
    return cy.get(':nth-child(3) > .ps-0 > li').should('contain.text' , 'Obavezno polje')
}

getPhoneNumberErrorMessage()

{
    return cy.get(':nth-child(5) > .ps-0 > li').should('contain.text' , 'Obavezno polje')
}


}
export default ProfilRegrutera;