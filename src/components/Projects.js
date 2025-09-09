import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea,
  CircularProgress,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';

function Projects() {
  const navigate = useNavigate();
  const { projects, loading, error } = useProjects();
  const featuredProjects = projects.filter(project => project.isFeatured);
  const nonFeaturedProjects = projects.filter(project => !project.isFeatured);

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '50vh' 
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
        <Alert severity="error">
          Error loading projects: {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      {/* Featured Projects */}
      <Box mb={6}>
        <Typography variant="h4" sx={{ color: 'black' }} gutterBottom>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#FDFBF7',
                  border: '2px solid black',
                  boxShadow: '4px 4px 0px black',
                  '&:hover': {
                    transform: 'translate(-2px, -2px)',
                    boxShadow: '6px 6px 0px black',
                    transition: 'all 0.2s ease-in-out'
                  }
                }}
              >
                <CardActionArea onClick={() => navigate(`/project/${project.id}`)}>
                  <Box sx={{ 
                    height: 250,
                    bgcolor: '#FDFBF7',
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    '&:hover': {
                      transform: 'translate(-2px, -2px)',
                      boxShadow: '6px 6px 0px black',
                      transition: 'all 0.2s ease-in-out'
                    }
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/Images/placeholder.jpg';
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 2, pb: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        color: 'black',
                        fontWeight: 600,
                        '&:hover': {
                          color: 'black'
                        }
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="caption" color="primary" sx={{ display: 'block' }}>
                      {project.date}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Non-Featured Projects */}
      <Box>
        <Typography variant="h5" sx={{ color: 'black' }} gutterBottom>
          Other Projects
        </Typography>
        <Grid container spacing={3}>
          {nonFeaturedProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 4,
                  },
                }}
              >
                <CardActionArea onClick={() => navigate(`/project/${project.id}`)}>
                  <Box sx={{ 
                    height: 200,
                    bgcolor: '#FDFBF7',
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    '&:hover': {
                      transform: 'translate(-2px, -2px)',
                      boxShadow: '6px 6px 0px black',
                      transition: 'all 0.2s ease-in-out'
                    }
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/Images/placeholder.jpg';
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 2, pb: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        color: 'black',
                        fontWeight: 600,
                        '&:hover': {
                          color: 'black'
                        }
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="caption" color="primary" sx={{ display: 'block' }}>
                      {project.date}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
