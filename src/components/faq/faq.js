import Component from '@/shared/ui/base-component/base-component';

import styles from './faq.module.scss';

const questions = [
  {
    question: 'Question A',
    answer: 'Answer A',
  },
  {
    question: 'Question B',
    answer: 'Answer B',
  },
  {
    question: 'Question C',
    answer: 'Answer C',
  },
  {
    question: 'Question D',
    answer: 'Answer D',
  },
];

export default class FAQ extends Component {
  constructor() {
    super({
      tag: 'section',
      className: styles.faq,
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
      text: 'FAQs',
    });

    return title;
  }

  #createContent() {
    const content = new Component({
      tag: 'div',
      className: styles.content,
    });

    const faqList = questions.map((item) => {
      const faqItem = new Component({
        tag: 'details',
        className: styles.item,
      });

      const summary = new Component({
        tag: 'summary',
        className: styles.question,
        text: item.question,
      });

      const answer = new Component({
        tag: 'p',
        className: styles.answer,
        text: item.answer,
      });

      faqItem.appendChildren([summary, answer]);
      return faqItem;
    });

    content.appendChildren(faqList);
    return content;
  }
}
