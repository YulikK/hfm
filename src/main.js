import Footer from './components/footer/footer';
import './styles.scss';

const { body } = document;

const footer = new Footer();

body.appendChild(footer.getNode());
