import Skills from './Skills'

const About = () => {
    return (<div>
        <h2>Overview</h2>
        <p>I am a software developer refining my skills by building scalable applications and exploring new technologies. I have experience in JavaScript, TypeScript, Python, and Java, specializing in ReactJS, NextJS, ExpressJS, and Spring Boot to develop efficient fullstack solutions.</p>

        <h2>Education</h2>
        <p>Currently pursuing a Bachelor of Science in Pure Mathematics at the University of Lagos (2023-2026).</p>

        <h2>Experience</h2>
        <p>As a freelance developer, I have worked with multiple clients to build, optimize, and deploy fullstack applications tailored to their needs. This includes developing scalable web solutions, improving system performance, and integrating various technologies to enhance user experience.</p>

        <h2>Virtual Internships</h2>
        <ul>
            <li><strong>JP Morgan Chase & Co. Software Engineering Virtual Internship</strong> – Developed a Python client-side application, integrated real-time data with React and TypeScript, and performed unit testing.</li>
            <li><strong>Quantium Software Engineering Virtual Internship</strong> – Processed ~6,000 data points, built a Dash application for data visualization, and validated multiple test cases.</li>
            <li><strong>Cisco Software Engineering Virtual Internship</strong> – Designed the Sextant frontend, displayed users' public IPs, streamed data from a networked service, and presented project work.</li>
        </ul>

        <h2>Community Involvement</h2>
        <p>Beyond technical work, I actively contribute to the IEEE UNILAG Community Team, overseeing a 550+ member network. I create engaging newsletters and organize virtual events to foster collaboration.</p>

        <h2>Conclusion</h2>
        <p>I am always eager to tackle new challenges, optimize systems, and expand my knowledge in the ever-evolving tech landscape.</p>
        <Skills />
    </div>)
}

export default About