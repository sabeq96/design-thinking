import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'unstated'

class AppWrapper extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default AppWrapper