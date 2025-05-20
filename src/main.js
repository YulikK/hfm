import Header from './components/header/header';
import './styles.scss';

const { body } = document;

const header = new Header();
body.appendChild(header.getNode());
