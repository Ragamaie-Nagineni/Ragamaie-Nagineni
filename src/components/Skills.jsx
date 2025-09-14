// src/components/Skills.jsx
import { FaTools } from "react-icons/fa";
export default function Skills() {
  return (
    <section id="skills">
      <h2><FaTools /> Skills</h2>
      <div className="container">
      <ul>
        <li>Languages: Python, C</li>
        <li>Databases: PostgreSQL, SQL, MongoDB</li>
        <li>Web: HTML, CSS, JavaScript, React, Node.js, Express</li>
        <li>Tools: Git, GitHub, VS Code</li>
        <li>Data Science: Pandas, Scikit-learn, Matplotlib</li>
      </ul>
      </div>
    </section>
  );
}
