import Component from '@/shared/ui/base-component/base-component';
import JoinBtn from '@/shared/ui/join-btn/join-btn';

import styles from './form.module.scss';

export default class Form extends Component {
  constructor() {
    super({
      tag: 'form',
      className: styles.form,
    });

    this.#init();
  }

  #init() {
    const formTitle = new Component({
      tag: 'h3',
      className: styles.formTitle,
      text: 'Lorem ipsum dolor sit amet',
    });

    const inputs = this.#createInputs();
    const checkbox = this.#createCheckbox();
    const button = this.#createButton();

    this.appendChildren([formTitle, inputs, checkbox, button]);
  }

  #createInputs() {
    const inputsWrap = new Component({
      tag: 'div',
      className: styles.inputsWrap,
    });

    const firstNameInput = this.#createInput('text', 'First Name');
    const lastNameInput = this.#createInput('text', 'Last Name');
    const countrySelect = this.#createSelect('Country', [
      'USA',
      'UK',
      'Canada',
    ]);
    const phoneWrap = this.#createPhoneInput();
    const emailInput = this.#createInput('email', 'Email');
    const experienceSelect = this.#createSelect('Experience', [
      'Beginner',
      'Intermediate',
      'Expert',
    ]);

    inputsWrap.appendChildren([
      firstNameInput,
      lastNameInput,
      countrySelect,
      phoneWrap,
      emailInput,
      experienceSelect,
    ]);

    return inputsWrap;
  }

  #createInput(type, placeholder) {
    const input = new Component({
      tag: 'input',
      className: styles.input,
    });

    input.setAttribute('type', type);
    input.setAttribute('placeholder', placeholder);

    return input;
  }

  #createSelect(placeholder, options) {
    const select = new Component({
      tag: 'select',
      className: styles.select,
    });

    const defaultOption = new Component({
      tag: 'option',
      text: placeholder,
    });
    defaultOption.setAttribute('value', '');
    defaultOption.setAttribute('disabled', true);
    defaultOption.setAttribute('selected', true);

    const optionElements = options.map(
      (option) =>
        new Component({
          tag: 'option',
          text: option,
        })
    );

    select.append(defaultOption);
    optionElements.forEach((option) => select.append(option));

    return select;
  }

  #createPhoneInput() {
    const wrap = new Component({
      tag: 'div',
      className: styles.phoneWrap,
    });

    const code = this.#createInput('text', 'Code');
    code.setAttribute('maxlength', '4');
    const phone = this.#createInput('tel', 'Phone');

    wrap.appendChildren([code, phone]);
    return wrap;
  }

  #createCheckbox() {
    const wrap = new Component({
      tag: 'div',
      className: styles.checkboxWrap,
    });

    const checkbox = new Component({
      tag: 'input',
      className: styles.checkbox,
    });
    checkbox.setAttribute('type', 'checkbox');

    const label = new Component({
      tag: 'label',
      className: styles.checkboxLabel,
    });

    const text = new Component({
      tag: 'span',
      text: 'I have read and accepted the ',
    });

    const privacyLink = new Component({
      tag: 'a',
      text: 'Privacy Policy',
      className: styles.link,
    });
    privacyLink.setAttribute('href', '#');

    const andText = new Component({
      tag: 'span',
      text: ' and ',
    });

    const termsLink = new Component({
      tag: 'a',
      text: 'Terms and Conditions',
      className: styles.link,
    });
    termsLink.setAttribute('href', '#');

    label.appendChildren([checkbox, text, privacyLink, andText, termsLink]);
    wrap.append(label);

    return wrap;
  }

  #createButton() {
    const button = new JoinBtn();

    button.setAttribute('type', 'submit');

    return button;
  }
}
