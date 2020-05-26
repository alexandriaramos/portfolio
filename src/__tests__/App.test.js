import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import MobileHeader from '../components/mobile/Header';
import Header from '../components/Header';

describe('App', () => {
    test('should render page title', () => {
        const wrapper = shallow(<App />);

        const LoadingWrapper = wrapper.find('Loading');
        expect(LoadingWrapper).toHaveLength(1);

        const MobileHeaderWrapper = wrapper.find(MobileHeader);
        expect(MobileHeaderWrapper).toHaveLength(1);

        const HeaderWrapper = wrapper.find(Header);
        expect(HeaderWrapper).toHaveLength(1);

        const HomeBannerWrapper = wrapper.find('HomeBanner');
        expect(HomeBannerWrapper).toHaveLength(1);

        const AboutMeWrapper = wrapper.find('AboutMe');
        expect(AboutMeWrapper).toHaveLength(1);

        const SkillsWrapper = wrapper.find('Skills');
        expect(SkillsWrapper).toHaveLength(1);

        const ExperienceWrapper = wrapper.find('Experience');
        expect(ExperienceWrapper).toHaveLength(1);

        const ProjectsWrapper = wrapper.find('Projects');
        expect(ProjectsWrapper).toHaveLength(1);

        const FooterWrapper = wrapper.find('Footer');
        expect(FooterWrapper).toHaveLength(1);
    });
});
