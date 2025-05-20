import Component from '@/shared/ui/base-component/base-component';
import Link from '@/shared/ui/link/link';

import DownloadAppLink from './ui/download-app-link/download-app-link';
import LanguageLink from './ui/language-link/language-link';
import styles from './utility-panel.module.scss';

export default class UtilityPanel extends Component {
  constructor() {
    super({
      tag: 'div',
      className: styles.panel,
    });

    this.#init();
  }

  #init() {
    const memberText = new Component({
      tag: 'span',
      className: styles.memberText,
      text: 'Member of HF Markets Group',
    });

    const linksWrap = new Component({
      tag: 'div',
      className: styles.linksWrap,
    });

    const downloadAppLink = new DownloadAppLink();
    const contactUsLink = new Link('#', 'Contact us', styles.link);
    const partnerUsLink = new Link('#', 'Partner with us', styles.link);
    const languageLink = new LanguageLink(styles.link);
    const contactsWrap = new Component({
      tag: 'div',
      className: styles.contactsWrap,
    });
    contactsWrap.appendChildren([contactUsLink, partnerUsLink, languageLink]);
    linksWrap.appendChildren([downloadAppLink, contactsWrap]);
    this.appendChildren([memberText, linksWrap]);
  }
}
