import './css/Aside.css';
import MainNav from './MainNav';
import ContactUs from './ContactUs';

const Aside = () =>
    <aside id="sidebar" className="card">
        <MainNav />
        <hr />
        <ContactUs />
    </aside>;

export default Aside;