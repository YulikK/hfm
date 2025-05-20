import Component from '@/shared/ui/base-component/base-component';

import styles from './login-link.module.scss';

export default class LoginLink extends Component {
  constructor() {
    super({
      tag: 'a',
      className: styles.link,
      text: 'Login',
    });
  }
}
