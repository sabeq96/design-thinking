import { Container } from 'unstated';

export default class GlobalStore extends Container{
  state = {
    siteTitle: 'Uniwersytet Ekonomiczny W Krakowie',
    menu: [
      { id: 'Home', path: '/' },
      { id: 'News', path: '/' },
      { id: 'Rekrutacja', path: '/' },
    ],
  }
}