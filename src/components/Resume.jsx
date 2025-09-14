// src/components/Resume.jsx
import { FaFilePdf } from "react-icons/fa";
export default function Resume() {
  return (
    <section id="resume">
      <h2><FaFilePdf /> Resume</h2>
       <a 
                href="https://ragamaie-nagineni.github.io/Ragamaie-Nagineni-Portfolio/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download="Ragamaie_Resume.pdf"
            >
                Download My Resume (PDF)
            </a>
    </section>
  );
}
