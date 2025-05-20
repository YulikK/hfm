import Component from '@/shared/ui/base-component/base-component';

import styles from './header.module.scss';
import NavigationPanel from './ui/navigation-panel/navigation-panel';
import UtilityPanel from './ui/utility-panel/utility-panel';

export default class Header extends Component {
  constructor() {
    super({
      tag: 'header',
      className: styles.header,
    });

    this.#init();
  }

  #init() {
    const utilityPanel = new UtilityPanel();
    const navigationPanel = new NavigationPanel();

    this.appendChildren([utilityPanel, navigationPanel]);
  }
}
