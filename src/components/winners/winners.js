import Component from '@/shared/ui/base-component/base-component';
import JoinBtn from '@/shared/ui/join-btn/join-btn';

import Trophy from './trophy/trophy';
import WinnersTable from './winners-table/winners-table';
import styles from './winners.module.scss';

export default class Winners extends Component {
  constructor() {
    super({
      tag: 'section',
      className: styles.winners,
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
      text: 'SED FRINGILLA MAURIS SIT',
    });

    return title;
  }

  #createContent() {
    const content = new Component({
      tag: 'div',
      className: styles.content,
    });

    const winners = new Trophy();
    const table = new WinnersTable();

    content.appendChildren([winners, table]);
    return content;
  }

  #createButton() {
    const buttonWrap = new Component({
      tag: 'div',
      className: styles.buttonWrap,
    });

    const button = new JoinBtn();

    const terms = new Component({
      tag: 'span',
      className: styles.terms,
      text: 'Terms and Conditions apply',
    });

    buttonWrap.appendChildren([button, terms]);
    return buttonWrap;
  }
}
