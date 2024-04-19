class KorisnickaPodrska {

getMessageField()
{
    return cy.get('#message')
}

getSendButton()
{
    return cy.get('.component__button').click()
}

getTitle()
{
    return cy.get('.mb-5').should('contain.text' , 'Match IT')
}

getEmail()
{
    return cy.get('.px-5 > :nth-child(4)').should('contain.text' , 'support@matchit.rs')
}

getAddressInfo()
{
    return cy.get('.px-5 > :nth-child(2)').should('contain.text' , 'Veljka Dugoševića 54 Naučno tehnološki park Beograd')
}

}