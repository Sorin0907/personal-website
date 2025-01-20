import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { t } from 'ttag';

const Education: React.FC = () => {
  const educationList = [
    {
      degree: t`Level 4 Software Developer Apprenticeship`,
      institution: 'Apprentify',
      period: 'May 2023 - December 2024',
      description: t`Focused on developing key software engineering skills, including full-stack development, testing, and agile methodologies. Gained hands-on experience working on real-world projects, mastering modern frameworks, and applying industry best practices.`,
    },
    {
      degree: t`Professional Automation Developer Associate`,
      institution: 'UI Path',
      period: 'May 2024 - June 2024',
      description: t`Focused on process automation, it provided hands-on experience with automation tools and data structures, equipping me with the skills to develop efficient automation solutions.`,
    },
    {
      degree: t`DfE Bootcamp: Software Developer L3`,
      institution: 'QA',
      period: 'December 2022 - February 2023',
      description: t`Focused on software development fundamentals, covering coding, data structures, and best practices. It equipped me with the skills needed to develop efficient and scalable software solutions.`,
    },
    {
      degree: t`AZ-900: Microsoft Azure Fundamentals`,
      institution: 'Microsoft',
      period: 'December 2022 - January 2023',
      description: t`Provided a solid understanding of cloud concepts, core Azure services, and Azure pricing and support. It equipped me with the knowledge to work with Microsoft Azure and leverage its services for cloud-based solutions.`,
    },
    {
      degree: t`The Complete Java Certification Course`,
      institution: 'Udemy',
      period: 'July 2021 - July 2021',
      description: t`Covered core Java concepts, object-oriented programming, and advanced Java techniques. It provided the knowledge to develop efficient and maintainable Java applications.`,
    },
    {
      degree: t`Bachelor of Mechatronics and Robotics`,
      institution: 'Politechnic University of Bucharest',
      period: 'October 2014 - September 2018',
      description: t`Provided in-depth knowledge in mechanical, electrical, and software engineering. The program covered robotics, control systems, and automation. For my final project, I developed self-guided robots, applying principles of artificial intelligence and sensor integration to create autonomous systems.`,
    },
  ];

  return (
    <Box
      id="education"
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
        Education
      </Typography>
      <Timeline position="alternate">
        {educationList.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < educationList.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {edu.degree}
              </Typography>
              <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                {edu.institution}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {edu.period}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {edu.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education;
