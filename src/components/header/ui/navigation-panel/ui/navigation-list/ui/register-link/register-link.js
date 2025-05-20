import Component from '@/shared/ui/base-component/base-component';

import styles from './register-link.module.scss';

export default class RegisterLink extends Component {
  constructor() {
    super({
      tag: 'a',
      className: styles.link,
      text: 'Register',
    });
  }
}
