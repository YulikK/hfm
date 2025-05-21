import FAQ from './components/faq/faq';
import Footer from './components/footer/footer';
import './styles.scss';

const { body } = document;

const faq = new FAQ();
const footer = new Footer();

body.appendChild(faq.getNode());
body.appendChild(footer.getNode());
