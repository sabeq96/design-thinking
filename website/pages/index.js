import React from 'react'
import { GlobalStore } from '../container';
import { Subscribe } from 'unstated';

class Index extends React.Component {
  render() {
    return (
      <Subscribe to={[GlobalStore]}>
        {(globalStore) => {
          return (
            <div>{globalStore.state.siteTitle}</div>
          )
        }}
      </Subscribe>
    )
  }
}

export default Index