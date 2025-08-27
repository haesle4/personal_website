import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      id: '1',
      title: 'Project 1',
      description: 'Description of project 1',
      date: '2025',
      featured: true,
      image: 'placeholder.jpg'
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Description of project 2',
      date: '2024',
      featured: true,
      image: 'placeholder.jpg'
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Description of project 3',
      date: '2024',
      featured: true,
      image: 'placeholder.jpg'
    }
  ]);

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now().toString() }]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedProject } : p));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const toggleFeatured = (id) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    ));
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      toggleFeatured
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
