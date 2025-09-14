// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hi, I'm Ragamaie Nagineni</h1>
      <p>Computer Science Undergraduate | Web Developer | ML Enthusiast</p>
      <div>
        <a href="#projects" className="btn">View Projects</a>
         <a 
                href="https://ragamaie-nagineni.github.io/Ragamaie-Nagineni-Portfolio/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download="Ragamaie_Resume.pdf"
            >
                Download My Resume (PDF)
            </a>
      </div>
    </section>
  );
}
