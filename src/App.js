import React from 'react';
import Navbar from './components/Navbar';
import { Card, CardContent, Typography } from '@mui/material'
import './styles/App.css';

const projects = [
  {
    title: 'Tune Hunt',
    description: 'Get your steps in and collect music albums in a videogame fashion. This project was a fun project created for a HackDavis event. It involved utilization of Spotify and Google Maps API.',
    image: '../ProjectLogos/TuneHuntlogo.png', 
    tags: ['APIs', 'Python', 'React Native'],
    viewSource: 'https://github.com/jassand66/TuneHunt', 
  },
  {
    title: 'Personal Website',
    description: 'This project is a self-made project. I tasked myself with creating a personal website to display my programming skills. I utlitze React as well as Amazon Cloud Services. It serves the purpose of being a one stop shop for my projects as well as an extension of my imagination. ',
    image: '../ProjectLogos/personalsitelogo.png', 
    tags: ['Javascript', 'Amazon S3', 'ReactJS'],
    viewSource: '#', // Update with actual link
  },
  /* Create two more slots for ML project and for Aggie Tracker and for maybe the thread library*/
];



const skills = [
  { name: 'Python',
    image: '../Languages/python.png'
  },

  { name: 'Java',
    image: '../Languages/java-removebg-preview.png'
  },

  { name: 'JavaScript',
    image: '../Languages/javascript.png'
  },

  { name: 'React JS/Native',
    image: '../Languages/react.png'
  },

  { name: 'C/C++', 
    image: '../Languages/c.png'
  },

  { name: 'git', 
    image: '../Languages/git.png'
  },

];

const BioCard = () => (
  <Card className="bio-card">
    <CardContent className="bio-card-content">
      <div className="bio-text">
        <Typography variant="h5" component="div">
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {/* I am an aspiring software engineer with a passion for programming. I am proficient in C++, Python, Java, and Javascript.
          I hope to get the chance to use my programming skills to enable a better world. Programming with an impact is my motto. 
          I have had the fortunate opportunity to learn both people skills and programming skills through my work experience. While 
          in high-school I worked minimum wage jobs in order to get familiarized with social skills necessary in the workplace. Then 
          with my software engineering internship at UC Davis, I learned to further my programming knowledge and apply it in the real
          world. Currently, I am looking for full-time software engineering positions as I am a university graduate! */}

          I am a dedicated and passionate software engineer with a strong foundation in programming and a keen interest in leveraging technology to create meaningful impact.
          Proficient in multiple programming languages including C++, Python, Java, and JavaScript, I am committed to utilizing my technical skills to develop innovative solutions
          that contribute to a better world.Throughout my educational and professional journey, I have consistently sought opportunities to expand both my technical and interpersonal skills.
          In high school, I worked various minimum wage jobs to cultivate essential social skills and gain a practical understanding of workplace dynamics. These experiences taught me the importance
          of effective communication, teamwork, and adaptability. During my tenure as a software engineering intern at the University of California, Davis, I had the opportunity to apply my programming knowledge in real-world scenarios.
          This internship was instrumental in deepening my understanding of software development processes and best practices.
          I collaborated with experienced engineers on complex projects, which honed my problem-solving abilities and reinforced my commitment to continuous learning.
          As a new university graduate, I am now seeking full-time software engineering positions where I can contribute my skills and enthusiasm to a team. I am excited to engage in challenging projects that would not only test my technical prowess but also align with my values of impact-driven programming.



        </Typography>

        <div className="bio-buttons">
          <a href="mailto:jassandhami@gmail.com" className="bio-button">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.linkedin.com/in/jassan-dhami-4a7164259/" className="bio-button">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/jassand66" className="bio-button">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

      </div>
      <div className="bio-image">
        <img src="../Languages/LinkedInProfpic.jpg" alt="Bio" />
      </div>
    </CardContent>
  </Card>
);


const SkillCard = ({ skill }) => (
  <Card className="skill-card" style={{ position: 'relative', paddingTop: '40px' }}>
    {skill.image && (
      <div className="skill-image">
        <img src={skill.image} alt={skill.name || 'Skill image'} />
      </div>
    )}
    <CardContent>
      <Typography variant="h6" component="div">
        {skill.name}
      </Typography>
      {skill.description && (
        <Typography variant="body2" color="text.secondary">
          {skill.description}
        </Typography>
      )}
    </CardContent>
  </Card>
);



const App = () => (
  <>
    <Navbar />

    <div id="home" className="section home">
      <h1>&gt; Jassan Dhami</h1>
      <p class="subhead">I am an aspiring software engineer. My passion is utilizing technology to further health. Check out my <a href="#projects" class="highlight">side-projects</a> below.</p>
      <div className="macos-window">
        <div className="window-bar">
          <div className="circle close"></div>
          <div className="circle minimize"></div>
          <div className="circle maximize"></div>
        </div>
        <div className="code-block">
          <p className="section-title">&gt; Jassan.contactInfo</p>
          <p>["<a href="mailto:jassandhami@gmail.com">jassandhami@gmail.com</a>", "<a href="https://www.linkedin.com/in/jassan-dhami-4a7164259/" target="_blank" rel="noopener noreferrer">LinkedIn</a>", "<a href="https://github.com/jassand66" target="_blank" rel="noopener noreferrer">github</a>"]</p>
          
          <p className="section-title">&gt; Jassan.interests</p>
          <p>["anime", "basketball", "taco bell", "summer"]</p>
          
          <p className="section-title">&gt; Jassan.resume</p>
          <p><a href="../Languages/Jassan Dhami - Resume Current.pdf" target="_blank" rel="noopener noreferrer">"jassandhami.pdf"</a></p>
          
          <p className="section-title">&gt; Jassan.education</p>
          <p>"B.Sc. Computer Science - University of California, Davis"</p>
          
          <p className="section-title">&gt; Jassan.skills</p>
          <p>["Python", "JavaScript", "C/C++", "React", "Java", "git"]</p>
        </div>
      </div>
    </div> {/* end of Home section*/}


    <div id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={`Project ${project.title}`} />
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.viewSource} className="btn view-source" target="_blank" rel="noopener noreferrer">
                <img src="../Languages/githublog.png" alt="GitHub Logo" className="github-logo"/> View Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div> {/* end of projects section*/}

    <div id="about" className="section">
      <div className="section-header">
        <h2>About</h2>
        <div className="underline"></div>
      </div>
      <BioCard />
      <div className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div> {/* end of about section */}
  </>
);

export default App;
