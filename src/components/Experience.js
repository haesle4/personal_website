import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function Experience() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'black' }}>Experience</Typography>
      <Box sx={{ mb: 6 }}>
        {/* Epoch International Experience */}
        <Card sx={{ 
          mb: 3,
          bgcolor: '#FDFBF7',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0px black',
            transition: 'all 0.2s ease-in-out'
          }
        }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                Software R&D Intern
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                June - August, 2025
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
              Epoch International • Dalian, China
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 1 }}>
              • Developed software system to automate quality control phase in Circuit Board Production, saving San-Jose Branch workers 6 hours daily
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              • Gained expertise in C#, industry software standards, hardware-software integration, technical communication across languages, and basic Chinese
            </Typography>
          </CardContent>
        </Card>

        {/* Shah Lab Experience */}
        <Card sx={{ 
          mb: 3,
          bgcolor: '#FDFBF7',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0px black',
            transition: 'all 0.2s ease-in-out'
          }
        }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                Computational Neuroscience Researcher
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                January - June 2025
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
              Shah Lab • Stanford, California
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 1 }}>
              • Achieved 93% precision on synapse detection across 3000+ slices, cutting manual annotation time
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              • Designed and 3D printed experimental devices to help in neuroscience research
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Experience;
