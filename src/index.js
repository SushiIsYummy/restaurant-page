import './pages/header';
import './styles/global.css';
import './styles/home.css';
import './styles/header.css';
import './styles/about.css';
import './styles/menu.css';
import './styles/contact.css';
import createHeader from './pages/header';
import createAboutUs from './pages/about';
import createHomePage from './pages/home';
import createMenu from './pages/menu';
import createContactPage, { changeMessageMaxWidth } from './pages/contact';

createHeader();
createContactPage();
// createMenu();
// createAboutUs();
// createHomePage();

