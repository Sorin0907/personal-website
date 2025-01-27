import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const Projects: React.FC = () => {
  const projectList = [
    { title: 'Project 1', description: 'Coming soon ...' },
    { title: 'Project 2', description: 'Coming soon ...' },
    { title: 'Project 3', description: 'Coming soon ...' },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 2,
        bgcolor: 'background.default',
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
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: 'background.paper',
                color: 'text.primary',
                '&:hover': {
                  boxShadow: '0 0 15px #0ff',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
