import {Fragment} from 'react';

const MainNav = () =>
    <Fragment>
        <h3>Navigation</h3>
        <nav>
            <ul id="main-nav">
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </Fragment>;

export default MainNav;