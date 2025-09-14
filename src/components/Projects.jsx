// src/components/Projects.jsx
import { FaLaptopCode } from "react-icons/fa";
export default function Projects() {
    return (
        <section id="projects">
            <h2><FaLaptopCode /> Projects</h2>
      <div className="container">
            <ul>
                <li><b>DRAKZ:</b>
                    <p><em>IIIT curriculum-based group project | Ongoing</em></p>
                    <ul>
                        <li>Designed and implemented both frontend (HTML, CSS, JS) and backend (Node.js/Express or relevant stack) components.</li>
                        <li>Built user-facing pages with responsive design and interactive UI features.</li>
                        <li>Developed and integrated the database layer for handling user data and application logic.</li>
                        <li>Collaborated with team members on planning, feature development, and code structure.</li>
                        <li>Applied version control using Git/GitHub and followed modular coding practices.</li>
                    </ul></li>
                <li><b>Netflix Stock Data Analytics:</b>
                    <ul>
                        <li>Analyzed 20 years of Netflix stock data.</li>
                        <li>Built predictive models using Linear Regression, Random Forest, and SVR.</li>
                        <li>Evaluated performance using MSE; gained hands-on experience in pandas, matplotlib, and sklearn.</li>
                    </ul>
                </li>
                <li><b>Ant Colony Optimization:</b>
                    <ul>
                        <li>Enhanced algorithm efficiency using supervised ML models (Random Forest, Gradient Boosting).</li>
                        <li>Involved data preprocessing, feature engineering, evaluation, and visualization using scikit-learn.</li>
                    </ul>
                </li>
            </ul>
            </div>
        </section>
    );
}
