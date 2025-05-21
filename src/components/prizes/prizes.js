import medal1Img from '@/shared/assets/icons/medal-1.svg';
import medal2Img from '@/shared/assets/icons/medal-2.svg';
import medal3Img from '@/shared/assets/icons/medal-3.svg';
import Component from '@/shared/ui/base-component/base-component';
import JoinBtn from '@/shared/ui/join-btn/join-btn';

import styles from './prizes.module.scss';

const prizes = [
  {
    number: 1,
    amount: '$1000',
    description: 'CRAS DAPIBUS & CRAS DAPIBUS',
    icon: medal1Img,
  },
  {
    number: 2,
    amount: '$1000',
    description: 'CRAS DAPIBUS',
    icon: medal2Img,
  },
  {
    number: 3,
    amount: '$1000',
    description: 'CRAS DAPIBUS',
    icon: medal3Img,
  },
];

export default class Prizes extends Component {
  constructor() {
    super({
      tag: 'section',
      className: styles.prizes,
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
    const button = this.#createButton();

    container.appendChildren([title, content, button]);
    this.append(container);
  }

  #createTitle() {
    const title = new Component({
      tag: 'h2',
      className: styles.title,
      text: 'PRIZES',
    });

    return title;
  }

  #createContent() {
    const content = new Component({
      tag: 'div',
      className: styles.content,
    });

    const prizeCards = prizes.map((prize) => {
      const card = new Component({
        tag: 'div',
        className: styles.card,
      });

      const medal = new Component({
        tag: 'img',
        className: styles.medal,
      });
      medal.setAttribute('src', prize.icon);
      medal.setAttribute('alt', `medal-${prize.number}`);

      const number = new Component({
        tag: 'span',
        className: styles.number,
        text: prize.number.toString(),
      });

      const amount = new Component({
        tag: 'div',
        className: styles.amount,
        text: prize.amount,
      });

      const description = new Component({
        tag: 'p',
        className: styles.description,
        text: prize.description,
      });

      medal.append(number);
      card.appendChildren([medal, amount, description]);
      return card;
    });

    content.appendChildren(prizeCards);
    return content;
  }

  #createButton() {
    const buttonWrap = new Component({
      tag: 'div',
      className: styles.buttonWrap,
    });

    const button = new JoinBtn();

    const terms = new Component({
      tag: 'p',
      className: styles.terms,
      text: 'Terms and Conditions apply',
    });

    buttonWrap.appendChildren([button, terms]);
    return buttonWrap;
  }
}
