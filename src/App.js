import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Typography, Button, ThemeProvider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Admin from './components/Admin';
import ProjectDetail from './components/ProjectDetail';
import Home from './components/Home';
import { ProjectProvider } from './context/ProjectContext';
import theme from './theme';

// Navigation items
const navItems = [
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectProvider>
        <Router>
          <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default'
          }}>
            {/* Header */}
            <Box sx={{
              height: '80px',
              borderBottom: '2px solid black',
              display: 'flex',
              alignItems: 'center',
              px: 4
            }}>
              {/* Logo Box */}
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px',
                  px: 2,
                  mx: 0.5,
                  bgcolor: 'black',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)'
                  }
                }}>
                  <Typography variant="h5" sx={{
                    color: 'white',
                    fontWeight: 500
                  }}>
                    Keane Haesle
                  </Typography>
                </Box>
              </Link>

              <Box sx={{ borderLeft: '2px solid black', height: 40, mx: 4 }} />

              {/* Navigation Links */}
              <Box sx={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '40px',
                      px: 2,
                      mx: 0.5,
                      color: 'black',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: 'black',
                        color: 'white'
                      }
                    }}>
                      {item.label}
                    </Box>
                  </Link>
                ))}
              </Box>

              {/* Right Side Links */}
              <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', height: '80px' }}>
                <a 
                  href="https://www.linkedin.com/in/khaesle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                >
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px',
                    px: 2,
                    mx: 0.5,
                    color: 'black',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      bgcolor: 'black',
                      color: 'white'
                    }
                  }}>
                    <LinkedInIcon sx={{ mr: 1 }} />
                    LinkedIn
                  </Box>
                </a>
              </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
