import Navbar from "../components/Navbar";

const ProjectSection = () => {
    const projects = [
      {
        title: 'Finance DashBoard',
        description: 'The Finance Dashboard is a personalized financial tracking and analysis tool designed for users to manage their own investment data.',
        technologies: ['React','JavaScript', 'Node.js/Express','Postman','MongoDB', 'Finance'],
        githubLink: 'https://github.com/alexchavez01/finance-dashboard',
      },
      {
        title: 'FCC-Projects',
        description: 'Projects devloped to complete my certificate for FCC backend development',
        technologies: ['JavaScript', 'Backend devlopment'],
        githubLink: 'https://github.com/alexchavez01?tab=repositories',
      },
      {
        title: '3D Fighting Game',
        description: 'A Unity-based 3D fighting game that adapts AI difficulty to the player’s skill level. `Currently in progress`',
        technologies: ['Unity', 'C#', 'Game Development']
      },
      {
        title: 'Website Portfolio',
        description: 'My own wehsite to showcase my skills, and projects',
        technologies: ['React', 'HTML', 'TailWinsCSS', 'Web Development'],
        githubLink: 'https://github.com/alexchavez01?tab=repositories',
      },
      {
        title: 'Chemical Inventory Website',
        description: 'Developed a dynamic web app for managing chemical stockroom data with CRUD operations, and created a RESTful API for efficient data handling between the frontend and backend. Managed MySQL databases for inventory storage and deployed the app using Flask',
        technologies: ['Python', 'MySQL', 'Flask', 'HTMl', 'CSS', 'Docker'],
        githubLink: 'https://github.com/alexchavez01?tab=repositories',
      },
      {
        title: 'Blog ',
        description: 'Developed a functional Content Management System (CMS) for a blogging platform, enabling users to create, edit, and manage blog posts with role-based access control, draft/publish statuses, and comment moderation for an interactive user experience.',
        technologies: ['Python', 'PostgreSQL', 'Django', 'HTML', 'CSS', 'Docker'],
        githubLink: 'https://github.com/alexchavez01?tab=repositories',
      },
      {
        title: 'Other Projects',
        description: 'Other small projects that I have created and or created programs with group',
        technologies: ['Github'],
        githubLink: 'https://github.com/alexchavez01?tab=repositories',
      },
      
    ];
  
    return (
      <section id="projects" className="py-12 px-4 bg-gray-100 min-h-screen">
        <Navbar></Navbar>
        <h2 className="text-4xl font-bold text-center mb-10 animate-fadeIn">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold mb-2 text-black">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                 <span
                 key={i}
                 className="text-sm text-black  bg-gray-200 rounded-full px-3 py-1 fade-in-up transform transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-lg"
                 style={{ animationDelay: `${i * 0.1}s` }}
                 >
                    {tech}
                    </span>
                    ))}
              </div>
              <div className="flex gap-4">
                {project.liveLink && (
                    <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300"
                    >
                    Live Demo
                    </a>
                    )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjectSection;
  