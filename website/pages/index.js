import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

class Index extends React.Component {
  render() {
    const { state, changeSiteTitle } = this.props.store;
    return (
      <Fragment>
        {state.siteTitle}
      </Fragment>
    )
  }
}

Index.propTypes = {
  store: PropTypes.object.isRequired, // state and functions
}

export default Index