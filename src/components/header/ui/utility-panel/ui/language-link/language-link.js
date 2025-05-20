import Component from '@/shared/ui/base-component/base-component';

import styles from './language-link.module.scss';

export default class LanguageLink extends Component {
  constructor(className = '') {
    super({
      tag: 'a',
      className: `${styles.link} ${className}`,
    });

    this.#init();
  }

  #init() {
    const icon = new Component({
      tag: 'span',
      className: styles.icon,
    });

    this.append(icon);
  }
}
