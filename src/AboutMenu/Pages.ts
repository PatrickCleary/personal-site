import {software} from './SoftwareExperience';
import {uxdesign} from './UXDesign';
import {transit} from '../CaseStudy/TransitMattersWriting';
import { interests } from './InterestsWriting';

export type PageNames = PageNamesNonNull | null;
export type PageNamesNonNull = 'uxdesign' | 'software' | 'interests'| 'transit' | 'cargo';

export const Pages = {
    uxdesign: {
        title: "Why UX Design?",
        content: uxdesign,
    },
    software: {
        title: "Software",
        content: software,
    },
    interests: {
        title:"Interests",
        content: interests,
    },
    transit: {
        title: "TransitMatters",
        content: transit,
    },
    cargo: {
        title: 'CarGo',
        content:transit,
    }
}