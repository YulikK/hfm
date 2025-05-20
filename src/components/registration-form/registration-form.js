import Component from '@/shared/ui/base-component/base-component';

import styles from './registration-form.module.scss';
import Form from './ui/form/form';

export default class RegistrationForm extends Component {
  constructor() {
    super({
      tag: 'section',
      className: styles.registration,
    });

    this.#init();
  }

  #init() {
    const container = new Component({
      tag: 'div',
      className: styles.container,
    });
    const title = this.#createTitle();
    const form = new Form();

    container.appendChildren([title, form]);
    this.append(container);
  }

  #createTitle() {
    const title = new Component({
      tag: 'div',
      className: styles.title,
    });

    const mainTitle = new Component({
      tag: 'h1',
      className: styles.mainTitle,
      text: 'LOREM IPSUM DOLOR',
    });

    const subTitle = new Component({
      tag: 'h2',
      className: styles.subTitle,
      text: 'SIT AMET TOSIK',
    });

    title.appendChildren([mainTitle, subTitle]);
    return title;
  }
}
