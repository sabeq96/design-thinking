import React from 'react';
import App, { Container } from 'next/app';
import { Provider, Subscribe } from 'unstated';
import { GlobalStore } from '../container';

class AppWrapper extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Provider>
          <Subscribe to={[GlobalStore]}>
            {(globalStore) => (
              <Component
                {...pageProps}
                store={globalStore}
              />
            )}
          </Subscribe>
        </Provider>
      </Container>
    )
  }
}

export default AppWrapper