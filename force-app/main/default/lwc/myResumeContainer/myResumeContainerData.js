import SOCIAL from '@salesforce/resourceUrl/SOCIAL';
import Hasan from '@salesforce/resourceUrl/Hasan';
import { wire } from 'lwc';

export const PROFILE_IMAGE = Hasan

export const SOCIAL_LINKS=[
    {
        type: 'twitter',
        label: "twitter/Hasan_Mehdi1",
        link: "https://twitter.com/Hasan_Mehdi1",
        icon: SOCIAL +'/SOCIAL/twitter.svg'
    },
    {
        type: "facebook",
        label: "facebook/mehdi.hasan.14473",
        link: "https://facebook.com/mehdi.hasan.14473",
        icon: SOCIAL + '/SOCIAL/facebook.svg'
    },
    {
        type: "github",
        label: "github/beinghasan",
        link: "https://github.com/beinghasan",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/md-mehdi-hasan-9a532488",
        link: "https://www.linkedin.com/in/md-mehdi-hasan-9a532488/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/mehdihasan",
        link: "https://trailblazer.me/id/mehdihasan",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'Md Mehdi Hasan',
    ROLE:'Senior Associate Consultant',
    EMAIL:'mehdi.hasan9b@gmail.com',
    PHONE:'+91 9618533850'
}

export const CAREER_SUMMARY={
    HEADING:'CAREER SUMMARY',
    DESCRIPTION: 'Certified Salesforce Administrator & PD1 Developer with around 4 years of IT experience, good communication and leadership skills and ability to perform well in a fast-paced business environment. Performance-driven and hard-working with good technical and functional expertise and a track record of success in leveraging the Salesforce Platform to provide organizations with capabilities, functionality, process builder automation, flows and reports.',
    KEY_POINTS:[
        'Experience in designing, developing and implementing applications like Sales, Marketing, Community  Portal, Service and Support modules.',
        'Worked on various Salesforce.com standard objects like Accounts, Contacts, Opportunities, Campaigns, Cases, Leads, Reports and Dashboards.',
        'Designed business processes automations based on Salesforce Platforms.',
        'Salesforce.com Customization: Objects, Lightning App, Tabs, Page Layouts, Approval Process, Validation Rules, Formulas, Workflow, Sharing & Visibility, Reports, Dashboards, Report Types, Flows, Process Builder, Apex etc.'
    ]
}

export const EXPERIENCE_DATA={
    HEADING:'WORK EXPERIENCE',
    EXPERIENCES: [
        {
            ROLE:'Salesforce Consultant',
            COMPANY_NAME:'Stratos Studio',
            PROJECT: 'IT Project Management Application',
            DURATION:'(Feb 2022 – Jan 2023)',
            DESCRIPTION:'This project is about project management, employee data and their allocation based on their skill sets. It aims to take care of Resource Allocation and Billing Invoice. My role and responsibilities in this project are like to develop, document and organize functional designs for business requirements. Responsible for the set-up and configuration of the project as per the business requirements. Leverage the existing features of Salesforce by implementing Apex Class, Trigger & LWC.',
            DESCRIPTION_POINTS:[
                'Developed, documented and organized functional designs for business requirements.',
                'Responsible for the set-up, configuration and maintenance of the different Salesforce Projects.',
                'Created data model and business processes for marketing, sales and service cloud.',
                'Created page layouts, search layouts, custom links, and related lists.',
                'Configured pick-lists, multi-select pick-lists, dependent pick-lists, lookup, junction objects, master-detail relationships, validation rules, record types and formula fields.',
                'Created report types, reports & dashboards which shows dynamic data.',
                'Created Salesforce Objects and related metadata necessary to support customizations across instances.',
                'Created webpage in experience cloud for lead generation & case management.',
                'Implemented Omni-Channel feature of service cloud for live chat with agents and knowledge article.',
                'Setting up of users, role hierarchies, sharing settings, permission sets, public groups etc.',
                'Leverage the existing features of Salesforce by implementing Apex Class, Trigger & LWC.',
                'Designed business processes automations based on the Salesforce Platform.'
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    'Salesforce',
                    'Apex Class',
                    'Apex Trigger',
                    'Git',
                    'HTML',
                    'CSS',
                    'JavaScript'
                ]
            }
        },
        {
            ROLE:'System Engineer',
            COMPANY_NAME:'TCS',
            PROJECT:'Investment Banking',
            DURATION:'(Feb 2021 – Sep 2021)',
            DESCRIPTION:'This project is about customer registeration using front end and data will gets stored in Salesforce. Handled object creation, validation rule, formula, page layouts, record types and so on at the backend.',
            DESCRIPTION_POINTS:[
                'Creation of custom objects and fields in Salesforce org.',
                'Creation of fields, formula field, validation rule, rollup summary fields, page layout, record types, tabs, apps, approval process etc.',
                'Process builder, flow, workflow, trigger creation.',
                'Designing lighting pages and creating custom lighting components.',
                'Used change set & git to deploy and manage resources from one org to other org.'
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    'Salesforce',
                    'Apex Trigger',
                    'Apex Class',
                    'Git',
                ]
            }
        },
        {
            ROLE:'Assistant System Engineer',
            COMPANY_NAME:'TCS',
            PROJECT:'MENA HUB Modernization (',
            DURATION:'(Jun 2019 – Jan 2021)',
            DESCRIPTION:'This project is about clustring by making different regions to work under one roof i.e., converting all NON-MCH to MCH site under MENA region. ',
            DESCRIPTION_POINTS:[
                'Worked on different hands-on task as well as amended codes for existing applications as per the requirement & developed new utility programs and performed MIC & Conversion.',
                'Experienced in designing, developing and implementing different cross country banking applications like Oman RTGS, KNPS, Qatar DD, QIPS, WPS, WOLF screening etc.',
                'To look after the architecture and prepare design document & analyzed issues or problems which helps in decision making in most effective way and come up with RCA.',
                'Designed UTC, uploaded it on QC and deployed sources through ARCAD using CI/CD pipeline (Jenkins).',
                'Designed UTC doc and performed MIC and conversion analysis.',
                'Attended daily scrum meetings, maintained user story & tasks in JIRA and provided Batch/Online support.'
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    'AS400',
                    'RPG',
                    'CLLE',
                    'ARCAD',
                    'QC ALM'
                ]
            }
        }
    ]
}

export const EDUCATION_DATA={ 
    HEADING: "EDUCATION",
    ICON: SOCIAL +'/SOCIAL/education.svg',
    LIST: [
        {
            NAME: "Bachelor of Technology",
            UNIVERSITY_NAME: "Maulana Azad National Urdu University",
            DURATION: "2015-2019"
        },
        {
            NAME: "Intermediate",
            UNIVERSITY_NAME: "Jamia Millia Islamia",
            DURATION: "2013-2015"
        }
    ]
}

export const AWARDS_DATA={
    ICON: SOCIAL + '/SOCIAL/awards.svg',
    HEADING: "AWARDS",
    LIST: [
        {
            NAME: "On The Spot Award",
            DESCRIPTION:"In appreciation of contribution towards work, support and commitment.",
        },
        {
            NAME: "Special Initiative Award",
            DESCRIPTION:"In appreciation of the outstanding contribution to the organization and becoming a role model for colleagues.",
        },
        {
            NAME: "Best Inductee Award",
            DESCRIPTION:"Certificate of achievement in appreciation of learning efforts and decipline in H1-FY20",
        }
    ]
}

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce Platform Dev 1",
        },
    ]
}

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "Web technologies",
            SKILLS_LIST: [
                { NAME: "HTML5", LEVEL: "85" },
                { NAME: "JavaScript", LEVEL: "80" },
                { NAME: "CSS3", LEVEL: "70" },
            ],
        },
        {
            HEADING: "Technologies:",
            SKILLS_LIST: [
                { NAME: "Salesforce CRM", LEVEL: "80" },
                { NAME: "Apex Class", LEVEL: "75" },
                { NAME: "Apex Trigger", LEVEL: "70" },
                { NAME: "LWC", LEVEL: "75" },
            ],
        },
        {
            HEADING: "Tools",
            SKILLS_LIST: [
                { NAME: "Developer Console", LEVEL: "90" },
                { NAME: "VS Code", LEVEL: "85" },
                { NAME: "Git", LEVEL: "80" },
            ],
        }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Agile",
            "SDLC",
            "Core Java",
            "QC",
            "JIRA",
            "ARCAD",
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Travelling", "Cooking", "Cricket"]
}