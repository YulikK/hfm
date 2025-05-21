import trophy1Ing from '@/shared/assets/icons/trophy-1.svg';
import trophy2Ing from '@/shared/assets/icons/trophy-2.svg';
import trophy3Ing from '@/shared/assets/icons/trophy-3.svg';
import Component from '@/shared/ui/base-component/base-component';

import styles from './trophy.module.scss';

const winnersList = [
  {
    place: 1,
    date: 'JANUARY 1ST WINNER',
    name: 'JOHN SMITH',
    id: '5678987654',
    gain: '16344%',
    icon: trophy1Ing,
  },
  {
    place: 2,
    date: 'JANUARY 2ND WINNER',
    name: 'JOHN SMITH',
    id: '5678987654',
    gain: '16344%',
    icon: trophy2Ing,
  },
  {
    place: 3,
    date: 'JANUARY 3RD WINNER',
    name: 'JOHN SMITH',
    id: '5678987654',
    gain: '16344%',
    icon: trophy3Ing,
  },
];

export default class Trophy extends Component {
  constructor() {
    super({
      tag: 'article',
      className: styles.trophy,
    });

    this.#init();
  }

  #init() {
    const winnerCards = winnersList.map((winner) => {
      const card = new Component({
        tag: 'div',
        className: styles.card,
      });

      const trophy = new Component({
        tag: 'img',
        className: styles.icon,
      });
      trophy.setAttribute('src', winner.icon);
      trophy.setAttribute(
        'alt',
        `Winner trophy for ${winner.place.toString()} place`
      );

      const place = new Component({
        tag: 'span',
        className: styles.place,
        text: winner.place.toString(),
      });

      trophy.append(place);

      const info = new Component({
        tag: 'div',
        className: styles.info,
      });

      const date = new Component({
        tag: 'h6',
        className: styles.date,
        text: winner.date,
      });

      const user = new Component({
        tag: 'div',
        className: styles.user,
      });

      const name = new Component({
        tag: 'p',
        className: styles.name,
        text: winner.name,
      });

      const id = new Component({
        tag: 'span',
        className: styles.id,
        text: winner.id,
      });

      user.appendChildren([name, id]);

      const gain = new Component({
        tag: 'p',
        className: styles.gain,
        text: `TOTAL GAIN OF `,
      });

      const gainPercent = new Component({
        tag: 'span',
        className: styles.percent,
        text: winner.gain,
      });

      gain.append(gainPercent);
      info.appendChildren([date, user, gain]);

      const prize = new Component({
        tag: 'div',
        className: styles.prize,
        text: '$1000',
      });

      card.appendChildren([trophy, info, prize]);
      return card;
    });

    this.appendChildren(winnerCards);
  }
}
