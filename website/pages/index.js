import React from 'react'

class Index extends React.Component {
  render() {
    console.log(this.props);
    setTimeout(() => this.props.store.changeSiteTitle('SUUUPER'), 3000);
    
    return (
      <React.Fragment>
        {this.props.store.state.siteTitle}
      </React.Fragment>
    )
  }
}

export default Index