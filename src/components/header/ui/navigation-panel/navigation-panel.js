import Component from '@/shared/ui/base-component/base-component';

import styles from './navigation-panel.module.scss';
import LogoLink from './ui/logo-link/logo-link';
import NavigationList from './ui/navigation-list/navigation-list';

export default class NavigationPanel extends Component {
  constructor() {
    super({
      tag: 'div',
      className: styles.panel,
    });

    this.#init();
  }

  #init() {
    const logo = new LogoLink();
    const navigationList = new NavigationList();
    this.appendChildren([logo, navigationList]);
  }
}
