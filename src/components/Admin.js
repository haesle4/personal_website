import React, { useState, useEffect } from 'react';
import { useProjects } from '../context/ProjectContext';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  CircularProgress,
  Switch,
  FormControlLabel,
  Card,
  Alert,
  Grid,
} from '@mui/material';
import { supabase } from '../supabase';
import { v4 as uuidv4 } from 'uuid';

// In a real app, this would be handled securely on the backend
const ADMIN_PASSWORD = 'TheSoggy@100';

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNewProjectDialog, setShowNewProjectDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [editingProject, setEditingProject] = useState(null);
  const { projects, addProject, toggleFeatured, deleteProject } = useProjects();
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    technologies: '',
    dateFinished: null,
    image_url: '',
  });

  const uploadImage = async (file) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `public/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (password === 'TheSoggy@100') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleToggleFeatured = async (project) => {
    try {
      setIsLoading(true);
      await toggleFeatured(project.id);
    } catch (err) {
      console.error('Error toggling featured status:', err);
      setError('Failed to toggle featured status: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (project) => {
    setNewProject({
      name: project.project_name,
      description: project.project_description,
      dateFinished: project.date,
      technologies: project.techniques,
      image_url: project.image_url
    });
    setEditingProject(project);
    setShowNewProjectDialog(true);
  };

  const handleCreateProject = async () => {
    try {
      setIsLoading(true);
      setError('');

      let imageUrl = newProject.image_url;
      
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      let error;
      if (editingProject) {
        // Update existing project
        ({ error } = await supabase
          .from('Personal Website Projects')
          .update({
            project_name: newProject.name,
            project_description: newProject.description,
            date: newProject.dateFinished,
            techniques: newProject.technologies,
            image_url: imageUrl || newProject.image_url
          })
          .eq('id', editingProject.id));
      } else {
        // Insert new project
        ({ error } = await supabase
          .from('Personal Website Projects')
          .insert([{
            project_name: newProject.name,
            project_description: newProject.description,
            date: newProject.dateFinished,
            techniques: newProject.technologies,
            image_url: imageUrl,
            featured: 'FALSE'
          }]));
      }

      if (error) throw error;

      console.log('Project saved successfully');
      setShowNewProjectDialog(false);
      setEditingProject(null);
      setNewProject({
        name: '',
        description: '',
        technologies: '',
        dateFinished: '',
        image_url: '',
      });
      setSelectedFile(null);
    } catch (error) {
      console.error('Error saving project:', error);
      setError('Failed to save project: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };



  if (!isAuthenticated) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Admin Login
            </Typography>
            <form onSubmit={handleSignIn}>
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained">
                Sign In
              </Button>
            </form>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Box>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Box>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Project Management
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setNewProject({
                  name: '',
                  description: '',
                  technologies: '',
                  dateFinished: null,
                  image_url: ''
                });
                setEditingProject(null);
                setShowNewProjectDialog(true);
              }}
              disabled={isLoading}
            >
              Create New Project
            </Button>
          </Box>

          {/* Project List */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            Existing Projects
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2, mx: -2, px: 2 }}>
            {projects.map((project) => (
              <Card key={project.id} sx={{ p: 2, width: '400px', flex: '0 0 auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ 
                    height: 200, 
                    bgcolor: '#FDFBF7',
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px black',
                    position: 'relative'
                  }}>
                    <img
                      src={project.image_url || '/Images/placeholder.jpg'}
                      alt={project.project_name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        padding: '8px'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/Images/placeholder.jpg';
                      }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <Typography variant="h6" sx={{ color: 'black' }}>
                      {project.project_name}
                    </Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={project.featured === 'TRUE' || project.isFeatured}
                          onChange={() => handleToggleFeatured(project)}
                          disabled={isLoading}
                        />
                      }
                      label="Featured"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {project.project_description}
                  </Typography>
                  <Box>
                    <Typography variant="caption" display="block">
                      Date: {project.date}
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                      Technologies: {project.techniques || 'None'}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        onClick={() => handleEdit(project)}
                        disabled={isLoading}
                        sx={{ flex: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setProjectToDelete(project);
                          setDeleteConfirmOpen(true);
                        }}
                        disabled={isLoading}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      )}

      {/* Project Dialog */}
      <Dialog 
        open={showNewProjectDialog} 
        onClose={() => setShowNewProjectDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{editingProject ? 'Edit Project' : 'Create New Project'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Project Name"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <TextField
              fullWidth
              label="Technologies (comma separated)"
              value={newProject.technologies}
              onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
              placeholder="React, TypeScript, Node.js"
            />
            <TextField
              fullWidth
              label="Date Finished"
              value={newProject.dateFinished}
              onChange={(e) => setNewProject({ ...newProject, dateFinished: e.target.value })}
              placeholder="YYYY-MM-DD"
            />
            <Box sx={{ mb: 2 }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  style={{ display: 'none' }}
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    fullWidth
                  >
                    {selectedFile ? selectedFile.name : 'Upload Project Image'}
                  </Button>
                </label>
                {newProject.image_url && !selectedFile && (
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Current image: {newProject.image_url}
                  </Typography>
                )}
              </Box>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setShowNewProjectDialog(false)} 
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleCreateProject} 
              variant="contained" 
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} /> : null}
            >
              {isLoading ? 'Saving...' : 'Save Project'}
            </Button>
          </DialogActions>
          {error && (
            <Box sx={{ p: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteConfirmOpen}
          onClose={() => setDeleteConfirmOpen(false)}
        >
          <DialogTitle>Delete Project</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete "{projectToDelete?.project_name}"? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
            <Button
              onClick={async () => {
                try {
                  setIsLoading(true);
                  await deleteProject(projectToDelete.id);
                  setDeleteConfirmOpen(false);
                  setProjectToDelete(null);
                } catch (err) {
                  setError('Failed to delete project: ' + err.message);
                } finally {
                  setIsLoading(false);
                }
              }}
              color="error"
              disabled={isLoading}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteConfirmOpen}
          onClose={() => setDeleteConfirmOpen(false)}
        >
          <DialogTitle>Delete Project</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete "{projectToDelete?.project_name}"? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
            <Button
              onClick={async () => {
                try {
                  setIsLoading(true);
                  await deleteProject(projectToDelete.id);
                  setDeleteConfirmOpen(false);
                  setProjectToDelete(null);
                } catch (err) {
                  setError('Failed to delete project: ' + err.message);
                } finally {
                  setIsLoading(false);
                }
              }}
              color="error"
              disabled={isLoading}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
}

export default Admin;
