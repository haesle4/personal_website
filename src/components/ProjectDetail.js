import React, { useState, useEffect } from 'react';
import placeholderImage from '../images/placeholder.jpg';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  IconButton,
  Link,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useProjects } from '../context/ProjectContext';

// Map project IDs to their respective images
const projectImages = {
  1: '/Images/Bouton_Detection_Image.jpg',
  2: '/Images/First_Page_EEG_Project.jpg',
  3: '/Images/PCB_First_Board_Check.jpg'
};

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const project = projects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate through project images every 5 seconds
  useEffect(() => {
    if (project?.images?.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex(current => 
          current === project.images.length - 1 ? 0 : current + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [project]);

  if (!project) return <Typography>Project not found</Typography>;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>Back</Button>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {project.githubUrl && (
              <IconButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#FDFBF7',
                  border: '2px solid black',
                  boxShadow: '2px 2px 0px black',
                  '&:hover': {
                    bgcolor: '#FDFBF7',
                    transform: 'translate(-1px, -1px)',
                    boxShadow: '3px 3px 0px black'
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
            )}
            {project.demoUrl && (
              <IconButton
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#FDFBF7',
                  border: '2px solid black',
                  boxShadow: '2px 2px 0px black',
                  '&:hover': {
                    bgcolor: '#FDFBF7',
                    transform: 'translate(-1px, -1px)',
                    boxShadow: '3px 3px 0px black'
                  }
                }}
              >
                <LaunchIcon />
              </IconButton>
            )}
          </Box>
        </Box>

        <Typography variant="h4" component="h1" sx={{ color: 'black', mb: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mb: 3 }}>
          {project.date}
        </Typography>

        <Box sx={{ 
          width: '100%',
          height: 450,
          bgcolor: '#FDFBF7',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black',
          mb: 4,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          <img
            src={project.images?.[currentImageIndex] || project.image || placeholderImage}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Box>
        <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold', mb: 2 }}>
          Description
        </Typography>

        <Typography variant="body1" color="text.primary" paragraph sx={{ mb: 4 }}>
          {project.fullDescription}
        </Typography>

        {/* Technologies and Techniques */}
        <Box mb={4}>
          <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold', mb: 2 }}>
            Technologies and Techniques
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  bgcolor: '#FDFBF7',
                  border: '1px solid black',
                  '&:hover': {
                    bgcolor: '#F5F5F5'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

      </Box>
    </Container>
  );
}

export default ProjectDetail;
