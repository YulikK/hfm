import FAQ from './components/faq/faq';
import Footer from './components/footer/footer';
import Winners from './components/winners/winners';
import './styles.scss';

const { body } = document;

const winners = new Winners();
const faq = new FAQ();
const footer = new Footer();

body.appendChild(winners.getNode());
body.appendChild(faq.getNode());
body.appendChild(footer.getNode());
