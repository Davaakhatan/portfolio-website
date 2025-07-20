import React from "react"
import "../styles/Projects.css"
import ErieIncPro from "../Assets/ErieInc.png" // Ensure this image exists
import GannonSchedule from "../Assets/Gannon.png" // Ensure this image exists
import SDLC from "../Assets/SDLC.png" // Ensure this image exists
import KhanBank from "../Assets/khanbank.png"
import InfosolutionL from "../Assets/InfosolutionL.png"



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Internal Web Platform",
      company: "Erie Technology Incubator Inc.",
      description:
        "Built a comprehensive real-time internal web platform to support automation, system responsiveness, and usability for organizational operations using modern full-stack technologies.",
      technologies: ["React.js", "Node.js", "MySQL", "Redis", "REST APIs", "Figma", "Cloud"],
      category: "Full Stack Development",
      period: "Jan 2025 – May 2025",
      achievements: [
        "Improved system responsiveness with Redis caching",
        "Streamlined development process with reusable components",
        "Enhanced design consistency from Figma prototypes",
      ],
      status: "Completed",
      image: ErieIncPro, // Use the imported image
    },
    {
      id: 2,
      title: "MERN-Stack Course Scheduling Tool",
      company: "Gannon University",
      description:
        "Designed and built a comprehensive course scheduling tool that replaced Excel-based processes, improving efficiency by 80% for academic planning and faculty operations.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "APIs", "Authentication"],
      category: "Academic Tools",
      period: "Feb 2024 – May 2025",
      achievements: [
        "80% improvement in planning efficiency",
        "Replaced manual Excel-based processes",
        "Secure API development with user authentication",
      ],
      status: "Completed",
      image: GannonSchedule,
    },
    {
      id: 3,
      title: "AI-Powered SDLC Generator",
      company: "Gannon University",
      description:
        "Developed an innovative AI-powered Software Development Life Cycle generator that enables non-technical users to generate comprehensive project documentation from simple ideas.",
      technologies: ["Vercel", "Supabase", "OpenAI API", "AI/ML", "React", "Next.js"],
      category: "AI/ML Integration",
      period: "2024 – 2025",
      achievements: [
        "Enabled non-technical users to generate SDLC docs",
        "Integrated cutting-edge AI technologies",
        "Streamlined project planning workflows",
      ],
      status: "Completed",
      image: SDLC,
    },
    {
      id: 4,
      title: "Mobile Banking Infrastructure Modernization",
      company: "Khan Bank",
      description:
        "Led the modernization of mobile banking infrastructure and implemented automation pipelines for core financial services at Mongolia's largest bank, achieving 99.95% availability.",
      technologies: [
        "Jenkins",
        "Azure DevOps",
        "AWS EKS",
        "Azure AKS",
        "Kafka",
        "Ansible",
        "Grafana",
        "Prometheus",
        "ELK Stack",
        "Helm",
      ],
      category: "DevOps & Cloud",
      period: "Jan 2022 – July 2023",
      achievements: [
        "Improved API availability from 98.5% to 99.95%",
        "30% reduction in MTTR through automated monitoring",
        "60% reduction in release cycles",
        "Built CI/CD pipelines for 30+ microservices",
      ],
      status: "Completed",
      image: KhanBank,
    },
    {
      id: 5,
      title: "Enterprise Cloud Security Solutions",
      company: "Infosolution LLC",
      description:
        "Delivered comprehensive enterprise automation and cloud security solutions for finance and government clients with deep integration into Microsoft Azure services and Microsoft 365.",
      technologies: [
        "Azure",
        "ARM Templates",
        "React",
        "AngularJS",
        "Power BI",
        "SharePoint",
        "Azure Security Center",
        "Microsoft Defender",
      ],
      category: "Cloud Security",
      period: "Sep 2017 – Jan 2022",
      achievements: [
        "60% faster environment setup with ARM templates",
        "Enhanced real-time threat monitoring capabilities",
        "Automated compliance and infrastructure audits",
        "Delivered client-facing solutions and live demos",
      ],
      status: "Completed",
      image: InfosolutionL,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "status-completed"
      case "In Progress":
        return "status-progress"
      default:
        return "status-default"
    }
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Professional Projects</h2>
        <p className="projects-subtitle">
          A showcase of my professional experience across full-stack development, DevOps engineering, and cloud security
          solutions. Each project demonstrates real-world impact and technical expertise.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              <div className={`project-status ${getStatusColor(project.status)}`}>{project.status}</div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <p className="project-company">{project.company}</p>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-period">
                <span className="period-icon">📅</span>
                {project.period}
              </div>

              <div className="project-achievements">
                <h4 className="achievements-title">Key Achievements:</h4>
                <ul className="achievements-list">
                  {project.achievements.slice(0, 2).map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      <span className="achievement-bullet">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-badge tech-more">+{project.technologies.length - 4} more</span>
                )}
              </div>

              <div className="project-actions">
                <button className="project-button">
                  <span className="button-icon">🔗</span>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <p className="footer-text">Interested in learning more about my professional experience?</p>
        <button className="download-button">Download Resume</button>
      </div>
    </section>
  )
}

export default Projects
