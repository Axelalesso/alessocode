const skills = [
    '<i class="devicon-react-original colored"></i> React',
    '<i class="devicon-javascript-plain colored"></i> JavaScript',
    '<i class="devicon-angularjs-plain colored"></i> Angular',
    '<i class="devicon-html5-plain colored"></i> HTML',
    '<i class="devicon-css3-plain colored"></i> CSS',
    '<i class="devicon-mongodb-plain colored"></i> MongoDB',
    '<i class="devicon-mysql-plain colored"></i> SQL'
];

let currentIndex = 0;
const skillsContainer = document.getElementById("skills-container");

function renderSkills() {
  skillsContainer.innerHTML = "";
  const slice = skills.slice(currentIndex, currentIndex + 3);
  slice.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill-card");
    div.innerHTML = skill; // 👈 ahora se renderiza el icono de verdad
    skillsContainer.appendChild(div);
  });
}

function nextSkills() {
  currentIndex += 3;
  if (currentIndex >= skills.length) currentIndex = 0;
  renderSkills();
}

function prevSkills() {
  currentIndex -= 3;
  if (currentIndex < 0) currentIndex = Math.max(skills.length - 3, 0);
  renderSkills();
}

renderSkills();