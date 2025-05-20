import Component from '@/shared/ui/base-component/base-component';

import styles from './download-app-link.module.scss';

export default class DownloadAppLink extends Component {
  constructor() {
    super({
      tag: 'a',
      className: styles.link,
    });

    this.#init();
  }

  #init() {
    const icon = new Component({
      tag: 'span',
      className: styles.icon,
    });

    const text = new Component({
      tag: 'span',
      className: styles.text,
      text: 'Download App',
    });

    this.appendChildren([icon, text]);
  }
}
