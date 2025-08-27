import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useProjects } from '../context/ProjectContext';
import { Link } from 'react-router-dom';

function Home() {
  const { projects } = useProjects();
  const featuredProjects = projects.filter(project => project.isFeatured).slice(0, 3);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 4, color: 'black' }}>About Me</Typography>
        <Box sx={{
          display: 'flex',
          gap: 6,
          minHeight: '60vh',
          alignItems: 'center'
        }}>
        {/* Photo Section */}
        <Box sx={{ 
          bgcolor: '#FFFFFF',
          p: 2,
          borderRadius: 2,
          flexShrink: 0,
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          width: 400,
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="/Images/Selfie.jpg" 
            alt="Keane Haesle"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* Mission & About */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 600, color: 'black' }}>
            Electrical Engineering at Stanford University
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'rgba(0, 0, 0, 0.7)', mb: 3 }}>
            Hi! I'm Keane, a second year EE student studying at Stanford University.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'rgba(0, 0, 0, 0.7)', mb: 4 }}>
            I'm interested in Electrical Engineering and Machine Learning; and I'm eager to use my experience with software development, data processing, and system architecture to build robots.
          </Typography>
        </Box>
        </Box>
      </Box>

      {/* Featured Experiences Section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h4" sx={{ color: 'black' }}>
            Featured Experiences
          </Typography>
          <Link 
            to="/experience"
            style={{ 
              color: 'black',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'opacity 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            View all experiences →
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: 6 }}>
        {/* Experiences Column */}
        <Box sx={{ flex: 1, maxWidth: '70%' }}>
          {/* Epoch International Experience */}
          <Card sx={{ 
            mb: 3,
            bgcolor: '#FDFBF7',
            border: '2px solid black',
            boxShadow: '4px 4px 0px black'
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>Software R&D Intern</Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>June - Aug 2025</Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>Epoch International • Dalian, China</Typography>
              <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Developed software system to automate quality control phase in Circuit Board Production, saving San-Jose Branch workers 6 hours daily
              </Typography>
            </CardContent>
          </Card>

          {/* Shah Lab Experience */}
          <Card sx={{ 
            mb: 3,
            bgcolor: '#FDFBF7',
            border: '2px solid black',
            boxShadow: '4px 4px 0px black'
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>Computational Neuroscience Researcher</Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Jan - June 2025</Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>Shah Lab • Stanford, California</Typography>
              <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Achieved 93% precision on synapse detection across 3000+ slices, cutting manual annotation time
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {/* Photo */}
        <Box sx={{ 
          flex: 1,
          height: 400,
          bgcolor: '#FFFFFF',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}>
          <img 
            src="/Images/Epoch_International_Building2.jpg"
            alt="Epoch Building"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
        </Box>
      </Box>

      {/* Featured Projects Section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h4" sx={{ color: 'black' }}>
            Featured Projects
          </Typography>
          <Link 
            to="/projects"
            style={{ 
              color: 'black',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'opacity 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            View all projects →
          </Link>
        </Box>
        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
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
                    src={index === 0 ? "/Images/Bouton_Detection_Image.jpg" :
                         index === 1 ? "/Images/First_Page_EEG_Project.jpg" :
                         "/Images/PCB_First_Board_Check.jpg"}
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Typography variant="h6" sx={{ mt: 2, color: 'black', fontWeight: 600 }} gutterBottom>{project.title}</Typography>
                <Typography variant="body1" sx={{ color: 'black' }}>
                  {project.description}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box sx={{ display: 'flex', gap: 6, mb: 8 }}>
        {/* Photo */}
        <Box sx={{ 
          width: 300,
          height: 400,
          bgcolor: '#FFFFFF',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}>
          <img 
            src="/Images/Person_Coding.jpg"
            alt="Coding Skills"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
        {/* Skills List */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ color: 'black', mb: 4 }}>Skills</Typography>
          
          {/* Libraries */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'black', mb: 2, fontWeight: 600 }}>
              Libraries
            </Typography>
            <Grid container spacing={1.5}>
              {['PyTorch', 'OpenCV', 'NumPy'].map((skill) => (
                <Grid item key={skill}>
                  <Box sx={{ 
                    bgcolor: '#FDFBF7',
                    border: '2px solid black',
                    boxShadow: '2px 2px 0px black',
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      transform: 'translate(-1px, -1px)',
                      boxShadow: '3px 3px 0px black',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}>
                    <Typography sx={{ color: 'black' }}>{skill}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Coding Languages */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'black', mb: 2, fontWeight: 600 }}>
              Coding Languages
            </Typography>
            <Grid container spacing={1.5}>
              {['Python', 'C++', 'C#', 'Java', 'Arduino'].map((skill) => (
                <Grid item key={skill}>
                  <Box sx={{ 
                    bgcolor: '#FDFBF7',
                    border: '2px solid black',
                    boxShadow: '2px 2px 0px black',
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      transform: 'translate(-1px, -1px)',
                      boxShadow: '3px 3px 0px black',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}>
                    <Typography sx={{ color: 'black' }}>{skill}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Languages */}
          <Box>
            <Typography variant="h6" sx={{ color: 'black', mb: 2, fontWeight: 600 }}>
              Languages
            </Typography>
            <Grid container spacing={1.5}>
              {['English'].map((skill) => (
                <Grid item key={skill}>
                  <Box sx={{ 
                    bgcolor: '#FDFBF7',
                    border: '2px solid black',
                    boxShadow: '2px 2px 0px black',
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    '&:hover': {
                      transform: 'translate(-1px, -1px)',
                      boxShadow: '3px 3px 0px black',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}>
                    <Typography sx={{ color: 'black' }}>{skill}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box sx={{ 
        textAlign: 'center',
        py: 6,
        borderTop: '2px solid rgba(0, 0, 0, 0.1)',
        position: 'relative',
        maxWidth: 1200,
        mx: 'auto'
      }}>
        <Typography variant="h4" sx={{ color: 'black' }} gutterBottom>Get in Touch</Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'rgba(0, 0, 0, 0.7)' }}>
          Interested in collaborating? Let's connect.
        </Typography>
        <Box sx={{ display: 'inline-block', position: 'relative' }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'black',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.8)'
                }
              }}
            >
              Contact Me
            </Button>
          </Link>
          <Link 
            to="/admin" 
            style={{ 
              textDecoration: 'none',
              position: 'absolute',
              right: -600,
              bottom: 20,
              zIndex: 1
            }}
          >
            <Button 
              variant="text" 
              sx={{ 
                color: 'transparent',
                minWidth: '80px',
                height: '100%',
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
            >
              Admin
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
