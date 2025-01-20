import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem } from '@mui/material';
import { t } from 'ttag';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CustomList from '../components/CustomList';

const AboutMe: React.FC = () => {
  const skills = ['JavaScript', 'TypeScript', 'Node.js', 'React', 'GraphQL', 'Material UI', 'Cypress', 'Jest', 'Accessibility', 'Drupal'];
  const softSkills = ['Resilience', 'Teamwork', 'Problem Solving', '"Can do" attitude', 'Communication', 'Adaptability'];
  
  return (
    <Box
      id="about"
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
        {t`About Me`}
      </Typography>
      <Paper
        elevation={3}
        sx={{
          py: 3,
          px: { xs: 1, sm: 4, md: 6 },
          bgcolor: 'background.paper',
          textAlign: 'left',
          '&:hover': {
            boxShadow: '0 0 15px #0ff',
          },
          mb: { xs: 4, sm: 6, md: 8 },
          mx: { xs: 0, sm: 4, md: 6 },
        }}
      >
        <Typography>
          {t`I am a Software Developer with a passion for building efficient, user-friendly applications and tackling challenging projects that push my technical and problem-solving skills. My proudest achievements include:`}
        </Typography>
        <List>
          <ListItem >
            <LabelImportantIcon
              sx={{
                color: 'secondary.main',
                fontSize: 20,
                marginRight: 1,
              }}
            />
            <Typography>{t`Contributing to my company’s main project, an architecture migration of our intranet from Drupal 7 to Node.js`}</Typography>
          </ListItem>
          <ListItem>
            <LabelImportantIcon
              sx={{
                color: 'secondary.main',
                fontSize: 20,
                marginRight: 1,
              }}
            />
            <Typography>{t`Developing my first Drupal 10 module for a Public Sector client (OFSTED integration)`}</Typography>
          </ListItem>
          <ListItem>
            <LabelImportantIcon
              sx={{
                color: 'secondary.main',
                fontSize: 20,
                marginRight: 1,
              }}
            />
            <Typography>{t`Achieving a Distinction in my Level 4 Software Developer Apprenticeship six months ahead of schedule.`}</Typography>
          </ListItem>
        </List>
        <Typography>{t`I thrive in dynamic environments where I can take on complex problems. I am eager to continue growing my expertise and making meaningful contributions to impactful projects.`}</Typography>
      </Paper>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              bgcolor: 'background.paper',
              textAlign: 'center',
              '&:hover': {
                boxShadow: '0 0 15px #0ff',
              },
            }}
          >
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {t`Skills`}
            </Typography>
            <CustomList items={skills} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              bgcolor: 'background.paper',
              textAlign: 'center',
              '&:hover': {
                boxShadow: '0 0 15px #0ff',
              },
              mb: 4,
            }}
          >
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {t`Soft Skills`}
            </Typography>
            <CustomList items={softSkills} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              bgcolor: 'background.paper',
              textAlign: 'center',
              '&:hover': {
                boxShadow: '0 0 15px #0ff',
              },
            }}
          >
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {t`Hobbies and Interests`}
            </Typography>
            <Typography sx={{ my: 2 }}>{t`Coding`}</Typography>
            <Typography sx={{ my: 2 }}>{t`AI (Aren't we all?)`}</Typography>
            <Typography sx={{ my: 2 }}>{t`Traveling`}</Typography>
            <Typography sx={{ my: 2 }}>{t`Fixing Cars`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              bgcolor: 'background.paper',
              textAlign: 'center',
              '&:hover': {
                boxShadow: '0 0 15px #0ff',
              },
            }}
          >
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {t`Languages`}
            </Typography>
            <Typography sx={{ my: 2 }}>{t`Romanian (Native)`}</Typography>
            <Typography sx={{ my: 2 }}>{t`English (Fluent/C1)`}</Typography>
            <Typography sx={{ my: 2 }}>{t`Polish (In Progress..)`}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
