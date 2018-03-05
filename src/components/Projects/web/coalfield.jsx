import React from 'react';

import MainPage from "./coalfield/mainpage";
import DirectoryPage from './coalfield/directorypage';
import DirectoryPage2 from './coalfield/directorypage2';
import ContactPage from './coalfield/contactpage';
import EventsPage from './coalfield/eventspage';

import './styles.css';




export default function Coalfield() {
    return(
        <div className="row footerPadding">
            <div className="col-12">
                <h1 className="pageTitle">Coalfield Connection</h1>
            </div>
            <section className="col-12">
                <MainPage/>
                <DirectoryPage/>
                <DirectoryPage2/>
                <ContactPage/>
                <EventsPage />              
            </section>
        </div>
    );
}