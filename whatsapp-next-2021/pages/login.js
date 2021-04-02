import Head from 'next/head'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login () {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' />
        <LoginButton onClick={signIn} variant='outlined'>
          Sign in with Google
        </LoginButton>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 14px -3px rgba(88, 47, 0, 0.7);
`

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`

const LoginButton = styled(Button)`
  &&& {
    font-weight: 600;
    background-color: #e5e5e5;
    color: #252525;
  }
`
