import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import Menu from '../components/MainPage/Menu/Menu';
import HeroArea from '../components/MainPage/HeroArea/HeroArea';

class Index extends React.Component {
  render() {
    const { state, changeSiteTitle } = this.props.store;
    return (
      <Fragment>
        <Menu items={state.menu} />
        <HeroArea />
      </Fragment>
    )
  }
}

Index.propTypes = {
  store: PropTypes.object.isRequired, // state and functions
}

export default Index