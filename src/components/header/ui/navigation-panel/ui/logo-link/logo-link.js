import logoImage from '@/shared/assets/logo.svg';
import Component from '@/shared/ui/base-component/base-component';

import styles from './logo-link.module.scss';

export default class LogoLink extends Component {
  constructor(href) {
    super({
      tag: 'a',
      className: styles.link,
    });

    this.setAttribute('href', href);
    this.#init();
  }

  #init() {
    const img = new Component({
      tag: 'img',
      className: styles.img,
    });

    img.setAttribute('src', logoImage);
    img.setAttribute('alt', 'HFM Logo');
    img.setAttribute('width', '119');
    img.setAttribute('height', '58');

    this.append(img);
  }
}
