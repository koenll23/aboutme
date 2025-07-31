// Load project data from JSON and render
fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('projects-container');
    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank">🔗 View Project</a>
      `;
      container.appendChild(card);
    });
  });
