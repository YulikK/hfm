import FAQ from './components/faq/faq';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Prizes from './components/prizes/prizes';
import Winners from './components/winners/winners';
import './styles.scss';

const { body } = document;

const feat = new Features();
const prizes = new Prizes();
const winners = new Winners();
const faq = new FAQ();
const footer = new Footer();
body.appendChild(feat.getNode());
body.appendChild(prizes.getNode());
body.appendChild(winners.getNode());
body.appendChild(faq.getNode());
body.appendChild(footer.getNode());
