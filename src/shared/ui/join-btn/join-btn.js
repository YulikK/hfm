import Component from '@/shared/ui/base-component/base-component';

import styles from './join-btn.module.scss';

export default class JoinBtn extends Component {
  constructor() {
    super({
      tag: 'button',
      className: styles['join-btn'],
      text: 'JOIN NOW',
    });
  }
}
