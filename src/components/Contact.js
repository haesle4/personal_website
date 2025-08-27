import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Box sx={{ 
      maxWidth: 1200, 
      mx: 'auto', 
      py: 8,
      px: 4,
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Box sx={{ 
        display: 'flex',
        gap: 12,
        width: '100%',
        alignItems: 'flex-start'
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            flex: 1,
            color: 'black',
            fontSize: '2.2rem',
            lineHeight: 1.3,
            fontWeight: 600,
            mt: 12,
            paddingLeft: 0
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact me!
        </Typography>

        <Box sx={{ 
          flex: 1,
          bgcolor: '#FDFBF7',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          p: 6,
          borderRadius: 2
        }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'black' }}>
              Email
            </Typography>
            <Typography variant="body1" sx={{ color: 'black' }}>
              khaesle@gmail.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'black' }}>
              LinkedIn
            </Typography>
            <MuiLink 
              href="https://www.linkedin.com/in/khaesle"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                color: 'black',
                textDecoration: 'none',
                '&:hover': {
                  color: 'black'
                }
              }}
            >
              <LinkedInIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                linkedin.com/in/khaesle
              </Typography>
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
