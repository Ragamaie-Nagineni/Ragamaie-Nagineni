// src/components/Contact.jsx
import { FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact">
      <h2><FaEnvelope /> Contact</h2>
      <div className="container">
      <p>Email: <a href="mailto:ragamaie.n@gmail.com">ragamaie.n@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ragamaie-nagineni-9a3829293" target="_blank">linkedin.com/in/ragamaie-nagineni</a></p>
      <p>GitHub: <a href="https://github.com/Ragamaie-Nagineni" target="_blank">github.com/Ragamaie-Nagineni</a></p>
      </div>
    </section>
  );
}
