import appStore from '@/shared/assets/icons/app-store.svg';
import facebook from '@/shared/assets/icons/facebook.svg';
import googlePlay from '@/shared/assets/icons/google-store.svg';
import linkedin from '@/shared/assets/icons/in.svg';
import instagram from '@/shared/assets/icons/instagram.svg';
import telegram from '@/shared/assets/icons/telegram.svg';
import term from '@/shared/assets/icons/term.png';
import twitter from '@/shared/assets/icons/x.svg';
import youtube from '@/shared/assets/icons/youtube.svg';
import Component from '@/shared/ui/base-component/base-component';

import styles from './footer.module.scss';

export default class Footer extends Component {
  constructor() {
    super({
      tag: 'footer',
      className: styles.footer,
    });

    this.#init();
  }

  #init() {
    const container = new Component({
      tag: 'div',
      className: styles.container,
    });

    const content = this.#createContent();
    const warning = this.#createWarning();

    container.appendChildren([content, warning]);
    this.append(container);
  }

  #createContent() {
    const content = new Component({
      tag: 'div',
      className: styles.content,
    });

    const social = this.#createSocial();
    const download = this.#createDownload();

    content.appendChildren([social, download]);
    return content;
  }

  #createSocial() {
    const social = new Component({
      tag: 'div',
      className: styles.social,
    });

    const title = new Component({
      tag: 'h3',
      className: styles.title,
      text: 'Find us on',
    });

    const links = new Component({
      tag: 'div',
      className: styles.links,
    });

    const socialLinks = [
      { icon: facebook, alt: 'Facebook', href: '#' },
      { icon: twitter, alt: 'Twitter', href: '#' },
      { icon: telegram, alt: 'Telegram', href: '#' },
      { icon: youtube, alt: 'YouTube', href: '#' },
      { icon: instagram, alt: 'Instagram', href: '#' },
      { icon: linkedin, alt: 'LinkedIn', href: '#' },
      { icon: term, alt: 'Term', href: '#' },
    ];

    const socialIcons = socialLinks.map((link) => {
      const anchor = new Component({
        tag: 'a',
        className: styles.link,
      });
      anchor.setAttribute('href', link.href);
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');

      const icon = new Component({
        tag: 'img',
        className: styles.icon,
      });
      icon.setAttribute('src', link.icon);
      icon.setAttribute('alt', link.alt);

      anchor.append(icon);
      return anchor;
    });

    links.appendChildren(socialIcons);
    social.appendChildren([title, links]);
    return social;
  }

  #createDownload() {
    const download = new Component({
      tag: 'div',
      className: styles.download,
    });

    const title = new Component({
      tag: 'h3',
      className: styles.title,
      text: 'Download HFM App',
    });

    const stores = new Component({
      tag: 'div',
      className: styles.stores,
    });

    const storeLinks = [
      { icon: appStore, alt: 'Download on App Store', href: '#' },
      { icon: googlePlay, alt: 'Get it on Google Play', href: '#' },
    ];

    const storeButtons = storeLinks.map((store) => {
      const anchor = new Component({
        tag: 'a',
        className: styles.store,
      });
      anchor.setAttribute('href', store.href);
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');

      const icon = new Component({
        tag: 'img',
        className: styles.storeIcon,
      });
      icon.setAttribute('src', store.icon);
      icon.setAttribute('alt', store.alt);

      anchor.append(icon);
      return anchor;
    });

    stores.appendChildren(storeButtons);
    download.appendChildren([title, stores]);
    return download;
  }

  #createWarning() {
    const warning = new Component({
      tag: 'div',
      className: styles.warning,
    });

    const title = new Component({
      tag: 'h3',
      className: styles.warningTitle,
      text: 'Risk Warning',
    });

    const text = new Component({
      tag: 'p',
      className: styles.warningText,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p',
    });

    warning.appendChildren([title, text]);
    return warning;
  }
}
