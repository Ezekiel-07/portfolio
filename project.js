// Sample data store for project details
const projectData = {
  project1: {
    title: "E-Commerce Dashboard",
    description: "Built with modern JavaScript, CSS grid, and chart integration. Designed to monitor daily transactions, manage dynamic inventory lists, and render real-time sales reporting."
  }
};

function openDetailsModal(projectId) {
  const modal = document.getElementById("projectModal");
  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDescription");

  if (projectData[projectId]) {
    titleEl.textContent = projectData[projectId].title;
    descEl.textContent = projectData[projectId].description;
    modal.style.display = "flex";
  }
}

function closeDetailsModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside content area
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeDetailsModal();
  }
};