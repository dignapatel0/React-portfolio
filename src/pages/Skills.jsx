import React from 'react';
import SkillBox from '../components/SkillBox'; // Importing the SkillBox component to display individual skills
import '../styles/skills.css';

import htmlLogo from '../assets/logo/html.svg';
import cssLogo from '../assets/logo/css.svg';
import javascriptLogo from '../assets/logo/javascript.svg';
import mysqlLogo from '../assets/logo/mysql.svg';
import postgresqlLogo from '../assets/logo/postgresql.svg';
import mongodbLogo from '../assets/logo/mongodb.svg';
import prismaLogo from '../assets/logo/prisma.svg';
import reactLogo from '../assets/logo/react.svg';
import nodeLogo from '../assets/logo/node.svg';
import muiLogo from '../assets/logo/mui.svg';
import phpLogo from '../assets/logo/php.svg';
import laravelLogo from '../assets/logo/laravel.svg';
import vuejsLogo from '../assets/logo/vuejs.svg';
import tailwindcssLogo from '../assets/logo/tailwindcss.svg';
import bootstrapLogo from '../assets/logo/bootstrap.svg';
import typescriptLogo from '../assets/logo/typescript.svg';
import figmaLogo from '../assets/logo/figma.svg';
import githubLogo from '../assets/logo/github.svg';

const skillData = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'Mongodb', logo: mongodbLogo },
  { name: 'Prisma', logo: prismaLogo },
  { name: 'React', logo: reactLogo },
  { name: 'NodeJS', logo: nodeLogo },
  { name: 'Material UI', logo: muiLogo },
  { name: 'PHP', logo: phpLogo },
  { name: 'Laravel', logo: laravelLogo },
  { name: 'VueJS', logo: vuejsLogo },
  { name: 'TailwindCSS', logo: tailwindcssLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Github', logo: githubLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-page">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <SkillBox key={index} logo={skill.logo} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
