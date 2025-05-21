import Component from '@/shared/ui/base-component/base-component';

import styles from './winners-table.module.scss';

const data = [
  { name: 'John Smith', gain: '1624.19%' },
  { name: 'John Smith', gain: '1083.63%' },
  { name: 'John Smith', gain: '635.47%' },
  { name: 'John Smith', gain: '169.20%' },
  { name: 'John Smith', gain: '158.62%' },
  { name: 'John Smith', gain: '124.50%' },
  { name: 'John Smith', gain: '71.47%' },
  { name: 'John Smith', gain: '67.05%' },
  { name: 'John Smith', gain: '62.30%' },
  { name: 'John Smith', gain: '61.74%' },
];

export default class WinnersTable extends Component {
  constructor() {
    super({
      tag: 'article',
      className: styles.table,
    });

    this.#init();
  }

  #init() {
    const header = new Component({
      tag: 'h3',
      className: styles.tableHeader,
      text: 'ALIQUAM LOREM ANT',
    });

    const tableElement = new Component({
      tag: 'table',
      className: styles.tableElement,
    });

    const thead = new Component({
      tag: 'thead',
    });

    const headerRow = new Component({
      tag: 'tr',
      className: styles.headerRow,
    });

    const nameHeader = new Component({
      tag: 'th',
      className: styles.th,
      text: 'NAME',
    });

    const gainHeader = new Component({
      tag: 'th',
      className: styles.th,
      text: 'GAIN',
    });

    headerRow.appendChildren([nameHeader, gainHeader]);
    thead.append(headerRow);

    const tbody = new Component({
      tag: 'tbody',
    });

    const rows = data.map((item) => {
      const row = new Component({
        tag: 'tr',
        className: styles.tr,
      });

      const nameCell = new Component({
        tag: 'td',
        className: styles.td,
        text: item.name,
      });

      const gainCell = new Component({
        tag: 'td',
        className: `${styles.td} ${styles.gainCell}`,
        text: item.gain,
      });

      row.appendChildren([nameCell, gainCell]);
      return row;
    });

    const mark = new Component({
      tag: 'span',
      className: styles.mark,
      text: 'Nam quam nunc, blandit vel, luctus pulvinar',
    });

    tbody.appendChildren(rows);
    tableElement.appendChildren([thead, tbody]);
    this.appendChildren([header, tableElement, mark]);
  }
}
