import React from 'react'
import styled from 'styled-components'
import { HomeContainer, Header, HeaderContainer, Detail, ContactMe, Talk } from './Home'


// .someclass{

//     color: '#D2EEF4'
// }


const Container = styled(HeaderContainer)` 

  color: ${({theme}) => theme.main}
`




function HomepageTwo() {

    return (
        <HomeContainer>
            <Container>
                <Header >
                    Hi!
                </Header>

                <Detail >
                    A problem-solvin' language-learnin' sunuvabish 🙊. Has the mind 🧠 of an artist 🎨 and the keen eye 👀 of a growth engineer 📈.
                </Detail>

                <ContactMe>
                    <Talk href="mailto:'awoyomimayowa@gmail.com">Let's talk 🤺.</Talk>
                </ContactMe>

            </Container>

        </HomeContainer>
    )
}

export default HomepageTwo
