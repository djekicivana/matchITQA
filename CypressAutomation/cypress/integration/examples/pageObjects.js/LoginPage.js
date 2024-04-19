class Login {

getLoginText() {

    return cy.get('.fs-4').should('contain.text' , 'Login to continue')
}

getEmailField()
{
    return cy.get('#email')
}

getRegistrationRequestButton()
{
    return cy.get('a').click()
}

getLoginButton()
{
    return cy.get('.component__button').click()
}

getNotAccountError()
{
    return cy.get('li').should ('contain.text' , 'Za unetu E-mail adresu ne postoji registrovani nalog')
}

getShortEmailError()
{
    return cy.get('.ps-0 > :nth-child(2)').should ('contain.text' , 'Minimalan broj karaktera je 5')
}

getEmptyEmailFieldError()
{
    return cy.get('li').should('contain.text' , 'Obavezno polje')
}

}
export default Login;