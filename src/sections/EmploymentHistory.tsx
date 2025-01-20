import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { t } from 'ttag';
import { CheckCircle } from '@mui/icons-material';

type Job = {
  title: string,
  company: string,
  period: string,
  description: string,
  list?: string[],
  techStack?: string[],
}

const EmploymentHistory: React.FC = () => {
  const jobs: Job[] = [
    {
      title: t`Software Developer`,
      company: 'InvDev',
      period: 'May 2023 - Present',
      description: t`In my role as a Junior Developer, I have been part in key development projects and delivering high-quality technical solutions for public sector clients.`,
      list: [
        t`Main Project: Contributed to the migration of the company’s intranet architecture from Drupal 7 to Node.js, assisting in building new functionality and ensuring a seamless transition.`,
        t`Service Desk Support: Acted as the primary developer assigned to the service desk, supporting local councils using LGD websites by resolving technical issues efficiently and implementing feature enhancements to meet client requirements.`,
        t`Improved workflows, which led to increased customer satisfaction and reduced ticket resolution times.`,
        t`Collaborated closely with senior developers, gaining valuable mentorship and expanding my technical skill set while actively contributing to team success.`,
      ],
      techStack: ['Node.js', 'JS', 'TS', 'React', 'MUI', 'AWS', 'GraphQL', 'Drupal', 'Cypress', 'Jest', 'Git', 'GitHub'],
    },
    {
      title: t`Air Export Coordinator`,
      company: 'CGConex LTD',
      period: 'February 2022 - May 2023',
      description: t`Coordinated air export operations with a focus on accuracy and efficiency, specializing in shipments for the aerospace industry.`,
      list: [
        t`Prepared and issued MAWB/HAWB documentation and completed Export Customs and T1 declarations in compliance with regulations.`,
        t`Quoted existing and potential customers, contributing to client retention and new business growth.`,
        t`Ensured shipments were processed accurately and delivered on schedule.`,
      ],
    },
    {
      title: t`Operation Associate`,
      company: 'Marken LTD',
      period: 'October 2021 - February 2022',
      description: t`Supported air export operations with a focus on life-critical shipments, ensuring timely and accurate delivery.`,
      list: [
        t`Prepared and issued MAWB/HAWB documentation, ensuring compliance with export regulations.`,
        t`Handled life-critical shipments, ensuring accuracy and timely delivery to meet customer needs.`,
        t`Completed Export Customs declarations in accordance with relevant regimes and regulations.`,
        t`Delivered customer service, ensuring client satisfaction and smooth shipment processes.`,
      ],
    },
    {
      title: t`Junior Electrical Technician`,
      company: 'CSW Atlas Copco Sp.z.o.o.',
      period: 'February 2021 - September 2021',
      description: t`Assisted in the installation, maintenance, and repair of electrical, electromechanical, and electronic machinery components.`,
      list: [
        t`Installed, maintained, and repaired electrical and electromechanical parts of machinery and equipment.`,
        t`Diagnosed issues, developed effective repair solutions, and ensured minimal downtime.`,
        t`Delivered customer service, ensuring client satisfaction through timely and efficient support`,
      ],
    },
  ];

  return (
    <Box
      id="employment"
      sx={{
        py: 8,
        px: 2,
        bgcolor: 'grey.900',
        color: 'text.primary',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          textShadow: '0 0 10px #0ff',
        }}
      >
        Employment History
      </Typography>
      <Grid container spacing={4}>
        {jobs.map((job, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                '&:hover': {
                  boxShadow: '0 0 15px #0ff',
                },
              }}
            >
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {job.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main', mt: 1 }}>
                {job.company}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                {job.period}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {job.description}
              </Typography>
              <List sx={{ mt: 2 }}>
                {job.list?.map((item, idx) => (
                  <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                    <ListItemIcon sx={{ minWidth: '30px', color: 'primary.main' }}>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              {job.techStack && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb:1 }}>
                    Tech Stack:
                  </Typography>
                  <Typography variant="body2" sx={{
                    textShadow: '0 0 10px #0ff',
                    color: 'main.secondary'
                  }}>
                    {job.techStack?.join(', ')}
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EmploymentHistory;
