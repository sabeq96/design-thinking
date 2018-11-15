import { Container } from 'unstated';

export default class GlobalStore extends Container{
  state = {
    siteTitle: 'Hello!'
  }

  changeSiteTitle = (value) => {
    this.setState({siteTitle: value});
  }
}