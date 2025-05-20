import Component from '@/shared/ui/base-component/base-component';
import Link from '@/shared/ui/link/link';

import styles from './navigation-list.module.scss';
import LoginLink from './ui/login-link/login-link';
import RegisterLink from './ui/register-link/register-link';

const PAGES = [
  'Markets',
  'Trading',
  'Investing',
  'Tools & Education',
  'Company',
];

export default class NavigationList extends Component {
  constructor() {
    super({
      tag: 'nav',
      className: styles.navigation,
    });

    this.#init();
  }

  #init() {
    const list = new Component({
      tag: 'ul',
      className: styles.list,
    });

    const pagesWrap = new Component({
      tag: 'div',
      className: styles.pageWrap,
    });
    PAGES.forEach((page) => {
      const listItem = new Component({
        tag: 'li',
        className: styles.item,
      });
      const link = new Link('#', page, styles.link);
      listItem.append(link);
      pagesWrap.append(listItem);
    });

    list.append(pagesWrap);

    const authWrap = new Component({
      tag: 'div',
      className: styles.authWrap,
    });
    const authLinkList = [new LoginLink(), new RegisterLink()];

    authLinkList.forEach((link) => {
      const listItem = new Component({
        tag: 'li',
        className: styles.item,
      });
      listItem.append(link);
      authWrap.append(listItem);
    });
    list.append(authWrap);
    this.append(list);
  }
}
