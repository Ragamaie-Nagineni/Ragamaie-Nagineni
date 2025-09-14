// src/components/Experience.jsx
import { FaBriefcase } from "react-icons/fa";
export default function Experience() {
  return (
    <section id="experience">
      <h2><FaBriefcase /> Experience</h2>
      <div className="container">
      
      <div>
        <h3>Web Development Trainee (Dec 2023 – Jan 2024)</h3>
        <p>Industrial training in full stack development at Edu-versity Training Institute.</p>
        <ul>
          <li>Completed intensive industrial training in full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, and databases.</li>
          <li>Developed responsive and user-friendly web applications using modern frameworks and best coding practices.</li>
          <li>Gained practical exposure to deployment, version control (Git/GitHub), and debugging techniques.</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
