// src/components/Resume.jsx
import { FaFilePdf } from "react-icons/fa";
export default function Resume() {
  return (
    <section id="resume">
      <h2><FaFilePdf /> Resume</h2>
      <a href="/resume.pdf" target="_blank">Download My Resume (PDF)</a>
    </section>
  );
}
