import accountImg from '@/shared/assets/icons/account.svg';
import cashImg from '@/shared/assets/icons/cash.svg';
import chartImg from '@/shared/assets/icons/chart.svg';
import SmartPhoneImg from '@/shared/assets/smart-phone.png';
import Component from '@/shared/ui/base-component/base-component';

import styles from './features.module.scss';

export default class Features extends Component {
  constructor() {
    super({
      tag: 'section',
      className: styles.features,
    });

    this.#init();
  }

  #init() {
    const container = new Component({
      tag: 'div',
      className: styles.container,
    });

    const title = this.#createTitle();
    const content = this.#createContent();

    container.appendChildren([title, content]);
    this.append(container);
  }

  #createTitle() {
    const title = new Component({
      tag: 'h2',
      className: styles.title,
      text: 'QUISQUE RUTRUM',
    });

    return title;
  }

  #createContent() {
    const content = new Component({
      tag: 'div',
      className: styles.content,
    });

    const features = [
      {
        icon: accountImg,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      },
      {
        icon: cashImg,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      },
      {
        icon: chartImg,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      },
      {
        icon: accountImg,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
      },
    ];

    const phones = new Component({
      tag: 'div',
      className: styles.phones,
    });

    const phoneImage = new Component({
      tag: 'img',
      className: styles.phoneImage,
    });
    phoneImage.setAttribute('src', SmartPhoneImg);
    phoneImage.setAttribute('alt', 'Smart phones');

    phones.append(phoneImage);

    const featuresList = features.map((feature) => {
      const featureItem = new Component({
        tag: 'figure',
        className: styles.feature,
      });

      const icon = new Component({
        tag: 'img',
        className: styles.icon,
      });
      icon.setAttribute('src', feature.icon);
      icon.setAttribute('alt', 'Feature icon');

      const text = new Component({
        tag: 'figcaption',
        className: styles.text,
        text: feature.text,
      });

      featureItem.appendChildren([icon, text]);
      return featureItem;
    });

    const leftFeatures = new Component({
      tag: 'div',
      className: styles.featureGroup,
    });
    leftFeatures.appendChildren([featuresList[0], featuresList[1]]);

    const rightFeatures = new Component({
      tag: 'div',
      className: styles.featureGroup,
    });
    rightFeatures.appendChildren([featuresList[2], featuresList[3]]);

    content.appendChildren([leftFeatures, phones, rightFeatures]);

    return content;
  }
}
