import Features from './components/features/features';
import Header from './components/header/header';
import Prizes from './components/prizes/prizes';
import RegistrationForm from './components/registration-form/registration-form';
import './styles.scss';

const { body } = document;

const header = new Header();
const form = new RegistrationForm();
const feat = new Features();
const prizes = new Prizes();
body.appendChild(header.getNode());
body.appendChild(form.getNode());
body.appendChild(feat.getNode());
body.appendChild(prizes.getNode());
