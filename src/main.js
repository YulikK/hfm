import Header from './components/header/header';
import RegistrationForm from './components/registration-form/registration-form';
import './styles.scss';

const { body } = document;

const header = new Header();
const form = new RegistrationForm();
body.appendChild(header.getNode());
body.appendChild(form.getNode());
