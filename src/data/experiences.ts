export interface TimelineItem {
  title: string
  company: string
  date: string
  description: string
  isLast?: boolean
  technologies?: string[]
}

export const experiences: TimelineItem[] = [
  {
    title: 'Sr Software Engineer',
    company: 'Cerbyinc',
    date: '2023 - Current',
    description:
      'Full stack developer, working in cibersecurity platform. Using React, Typescript',
    technologies: ['React', 'Typescript'],
  },
  {
    title: 'Sr Software Engineer',
    company: 'Human API',
    date: '2021 - 2023',
    description:
      'Full stack developer, working with React, Nodejs, MongoDB, AWS.',
    technologies: ['React', 'Nodejs', 'MongoDB', 'AWS'],
  },
  {
    title: 'Software Engineer III',
    company: 'Wizeline',
    date: '2017 - 2021',
    description: `
            <p>As Interviewer, I was responsible for the technical evaluation of candidates, and as a mentor, I was responsible for the technical development of the team.</p>
            <p>Developed with Vuejs & Apollo Client, a Social Network for a private university in Mexico, which impacts thousands of students.</p>
            <p>Developed with PHP and vanilla javascript a plugin to customize a CMS to post company offices locations and contacts to call in case of emergencies.</p>
            <p>Developed with React, I helped to develop an internal tool which impacts the company in a positive way giving the collaborators to ask questions to e-staff members directly.</p>
        `,
  },
  {
    title: 'Software Developer',
    company: 'SalesUp!',
    date: '2016 - 2017',
    description:
      'I helped by improving the framework to serve the frontend pages using technologies such as vanilla javascript and handlebars templates, but also I helped with a migration of the file management system by doing a re-platform for the system always thinking in a cloud environment using AWS services such as SQS, EC2, Lambdas.',
  },
  {
    title: 'Software Developer (Intern)',
    company: 'PriceTravel Holding',
    date: '2015',
    description: `
            <p>As a trainee, I helped to develop a web platform which displays product sales into a dashboard by accessing the location of each item sold and placing it in a world map. For this project we used leaflet as our map provides and webRTC for the real time sockets connection</p>
            <p>Also as a trainee, I helped in the replatform of a web-mobile application by separating concerns into server-side and client-side improving the load time from almost 10s to 200ms.</p>
        `,
  },
  {
    title: 'Software Developer (Intern)',
    company: 'Turicun',
    date: '2012',
    description:
      'As an Intern, I helped with some bash scripting to migrate SQL files to get information from those and migrating it to KML files to be consumed in a web application to display public transportation routes into a map of the city.',
  },
]
