import React from 'react';

import Loading from './components/Loading';
import MobileHeader from './components/mobile/Header';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

import data from './data';

export default function App() {
    const {
        name,
        location,
        email,
        phone,
        bio,
        skills,
        role,
        jobs,
        projects,
        resume,
        avatar,
        displayPhoto,
        background,
    } = data;

    return (
        <div>
            <Loading />
            <MobileHeader name={name} />
            <Header name={name} avatar={avatar} />
            <main className="main-left">
                <HomeBanner name={name} avatar={avatar} background={background} />
                <AboutMe
                    name={name}
                    location={location}
                    email={email}
                    phone={phone}
                    bio={bio}
                    role={role}
                    resume={resume}
                    displayPhoto={displayPhoto}
                />
                <Skills skills={skills} location={location} role={role} />
                <Experience location={location} role={role} jobs={jobs}/>
                <Projects projects={projects} role={role} location={location} />
                <Footer />
            </main>
        </div>
    );
}
