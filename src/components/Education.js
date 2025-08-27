import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function Education() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'black' }}>Education</Typography>

      {/* Stanford University */}
      <Card sx={{ 
        mb: 4,
        bgcolor: '#FDFBF7',
        border: '2px solid black',
        boxShadow: '4px 4px 0px black'
      }}>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
              <Typography variant="h5" sx={{ color: '#8C1515', fontWeight: 600 }}>
                Stanford University
              </Typography>
              <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Class of 2028
              </Typography>
            </Box>
            <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              Pursuing B.S. in Electrical Engineering
            </Typography>
          </Box>
          <Typography sx={{ color: 'black', mb: 3 }}>
            GPA: 3.7
          </Typography>
          
          <Typography variant="h6" sx={{ color: 'black', mb: 2 }}>Coursework</Typography>
          
          {/* Fall 2026 */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: 'black', fontWeight: 600, mb: 1 }}>
              Fall 2026
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>PHYSICS61 - Mechanics and Special Relativity</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>EE101A - Circuits I</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>ENGR108 - Introduction to Matrix Methods</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>CHINLANG1 - First Year Modern Chinese Quarter I</Typography>
            </Box>
          </Box>

          {/* Spring 2025 */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: 'black', fontWeight: 600, mb: 1 }}>
              Spring 2025
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>ENGR40M - Introduction to EE</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>MATH53 - Differential Equations</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>STATS220 - Machine Learning Methods for Neural Data Analysis</Typography>
            </Box>
          </Box>

          {/* Winter 2025 */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ color: 'black', fontWeight: 600, mb: 1 }}>
              Winter 2025
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>BIO102 - Introduction to Neuroscience</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>CS106B - Programming Abstractions</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>PATH51 - Human Anatomy</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>PWR1MO - Writing and Rhetoric</Typography>
            </Box>
          </Box>

          {/* Fall 2024 */}
          <Box>
            <Typography sx={{ color: 'black', fontWeight: 600, mb: 1 }}>
              Fall 2024
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>BIO12N - Sensory Ecology of Marine Animals</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>CHEM31E - Advanced General Chemistry</Typography>
              <Typography component="li" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>MATH51 - Linear Algebra and Multivariable Calculus</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Sandpoint High School & Stanford Online High School*/}
      <Card sx={{ 
        bgcolor: '#FDFBF7',
        border: '2px solid black',
        boxShadow: '4px 4px 0px black'
      }}>
        <CardContent>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
              <Typography variant="h5" sx={{ color: 'black', fontWeight: 600 }}>
                Sandpoint High School & Stanford OHS
              </Typography>
              <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                Class of 2024
              </Typography>
            </Box>
            <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              GPA: 3.97
              SAT: 1540
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Education;
