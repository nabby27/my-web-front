import { WorkExperience } from './models/work-experience';

export const workExperience: WorkExperience[] = [
  {
    company: 'Green Urban Data',
    start_date: 'January 2019',
    end_date: 'January 2020',
    location: 'Valencia (Spain)',
    jobs: [
      {
        title: 'Software Developer',
        description: 'GUD_SOFTARE_DEVELOP_DESCRIPTION'
      }
    ]
  },
  {
    company: 'Odec',
    start_date: 'August 2017',
    end_date: 'January 2019',
    location: 'Valencia (Spain)',
    jobs: [
      {
        title: 'Software Developer',
        description: 'ODEC_SOFTARE_DEVELOP_DESCRIPTION'
      },
      {
        title: 'Systems Administrator',
        tasks: [
          'Administration of physical servers in a private CPD',
          'Administration of development teams',
          'Data and network control',
          'Internal Software Audits',
          'Security controls and alerts',
          'Purchases of hardware and complementary material',
          'Management and creation of company accounts',
          'Preparation of environments for development teams'
        ]
      }
    ]
  }
];
