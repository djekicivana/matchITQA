class SviOglasi {


getKreiranjeOglasaButton()

{
   return cy.get('.toolbar-text').click()
}

getSviOglasiText()

{
    return cy.get('.h3').should('include.text' , 'Svi oglasi')

}

getMenuButton() 
{
    return cy.get('.justify-content-center > .fa-solid').click()
}

getProfilRegruteraButton()
{
    return cy.get('[href="https://staging.company.matchit.rs/me/profile"]').click()
}

getProfilKompanijeButton()
{
    return cy.get('[href="https://staging.company.matchit.rs/me/company"]').click()
}

getKorisnickaPodrskaButton()
{
    return cy.get('[href="https://staging.company.matchit.rs/contact"]').click()
}

getLogoutButton()
{
    return cy.get('[style="color: var(--red-50);"]').click()
}

getOglasiButton()
{
    return cy.get(':nth-child(1) > .sidebar__item-button > span').click()
}

getPoklapanjaButton()
{
    return cy.get(':nth-child(1) > .sidebar__item-button > span').click()
}


}
export default SviOglasi;








