import Component from '@/shared/ui/base-component/base-component';

import styles from './link.module.scss';

export default class Link extends Component {
  constructor(href, text, className = '') {
    super({
      tag: 'a',
      className: `${styles.link} ${className}`,
      text,
    });
    this.setAttribute('href', href);
  }
}
