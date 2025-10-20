import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabase';

const ProjectContext = createContext();

// Initial project data
const initialProjects = [
  {
    id: 1,
    title: 'Automatic Synapse Detection (Shah Lab)',
    description: 'Created a python pipeline with OpenCV and tifffile to organize, filter, and apply image detection to slides of 2-Photon image data. Process applied to 3000+ slides for neuroscience research.',
    fullDescription: 'Created a python pipeline with OpenCV and tifffile to organize, filter, and apply image detection to slides of 2-Photon image data. Process applied to 3000+ slides for neuroscience research.',
    date: 'March 30, 2025',
    image: '/Images/Bouton_Detection_Image.jpg',
    technologies: ['Python', 'OpenCV', 'tifffile', 'ImageJ'],
    features: [
      'Automated image processing pipeline',
      'Large-scale data handling (1000+ slides)',
      'Synapse detection algorithms',
      'Research-grade image analysis'
    ],
    isFeatured: true
  },
  {
    id: 2,
    title: 'Machine Learning for Decoding Eye-State from EEG (Stats 220)',
    description: 'Created four machine learning processes to decode binary eye states from EEG data. Our best model, an LSTM, achieved 70% accuracy.',
    fullDescription: 'Created four machine learning processes to decode binary eye states from EEG data. Our best model, an LSTM, achieved 70% accuracy.',
    date: 'September 30, 2025',
    image: '/Images/First_Page_EEG_Project.jpg',
    technologies: ['Python', 'PyTorch', 'Fourier Transform','LSTM', 'Hidden Markov Model', ],
    features: [
      'LSTM neural network implementation',
      '70% prediction accuracy',
      'Multiple ML model comparisons',
      'EEG data processing'
    ],
    isFeatured: true
  },
  {
    id: 3,
    title: 'Circuit Board Quality Check Software (Epoch Industries)',
    description: 'Developed software to control a camera/motor system to automate PCB board quality check phase in PCB production. Currently used in Epoch\'s San-Jose branch saving the team 6 hours a day.',
    fullDescription: 'Developed software to control a camera/motor system to automate PCB board quality check phase in PCB production. Currently used in Epoch\'s San-Jose branch saving the team 6 hours a day.',
    date: 'June 12, 2025',
    image: '/Images/PCB_First_Board_Check.jpg',
    technologies: ['C#', 'Hardware/Software Integration', 'System Architecture'],
    features: [
      'Automated PCB inspection',
      'Camera/motor system integration',
      'Real-time quality analysis',
      'Production time savings of 6 hours/day'
    ],
    isFeatured: true
  }
];

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from Supabase with fallback to local data
  const fetchProjects = async () => {
    try {
      // First try to fetch from Supabase
      const { data, error } = await supabase
        .from('Personal Website Projects')
        .select('*');

      if (error) throw error;

      if (data && data.length > 0) {
        // Transform the data to match our project structure
        const transformedProjects = data.map(project => ({
          id: project.id,
          title: project.project_name,
          description: project.project_description,
          fullDescription: project.project_description,
          date: project.date,
          image: project.image_url,
          technologies: project.techniques ? project.techniques.split(',').map(tech => tech.trim()) : [],
          isFeatured: project.featured === 'TRUE'
        }));
        setProjects(transformedProjects);
      } else {
        // If no data from Supabase, use local data
        console.log('No data from Supabase, using local project data');
        setProjects(initialProjects);
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching projects from Supabase, using local data instead:', err);
      // Fall back to using the local data
      setProjects(initialProjects);
      setError('Could not connect to the server. Showing local project data.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (project) => {
    try {
      const { data, error } = await supabase
        .from('Personal Website Projects')
        .insert([{
          project_name: project.name,
          project_description: project.description,
          date: project.dateFinished,
          techniques: project.technologies,
          image_url: project.image_url,
          featured: 'FALSE'
        }]);

      if (error) throw error;

      // Refresh projects from database
      fetchProjects();
    } catch (err) {
      console.error('Error adding project:', err);
      throw err;
    }
  };

  const deleteProject = async (projectId) => {
    try {
      const { error } = await supabase
        .from('Personal Website Projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;

      // Refresh projects from database
      await fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
      throw err;
    }
  };

  const editProject = (projectId, updatedProject) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, ...updatedProject } : p
    ));
  };

  const toggleFeatured = async (projectId) => {
    try {
      const project = projects.find(p => p.id === projectId);
      const { error } = await supabase
        .from('Personal Website Projects')
        .update({ featured: project.isFeatured ? 'FALSE' : 'TRUE' })
        .eq('id', projectId);

      if (error) throw error;

      // Refresh projects from database
      fetchProjects();
    } catch (err) {
      console.error('Error toggling featured status:', err);
      throw err;
    }
  };

  const getFeaturedProjects = () => {
    return projects.filter(project => project.isFeatured);
  };

  const getAllProjects = () => {
    return projects;
  };

  const getProjectById = (id) => {
    return projects.find(project => project.id === parseInt(id));
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      loading,
      error,
      addProject,
      deleteProject,
      editProject,
      toggleFeatured,
      getFeaturedProjects,
      getAllProjects,
      getProjectById,
      refreshProjects: fetchProjects
    }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}
