const KEY = "skynefh-projects";

export const getProjects = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const saveProjects = projects =>
  localStorage.setItem(KEY, JSON.stringify(projects));

export const createProject = project => {
  const projects = getProjects();
  projects.push(project);
  saveProjects(projects);
};

export const getProjectById = id =>
  getProjects().find(p => p.id === id);

export const updateProject = project => {
  saveProjects(
    getProjects().map(p => (p.id === project.id ? project : p))
  );
};

export const deleteProject = id =>
  saveProjects(getProjects().filter(p => p.id !== id));
