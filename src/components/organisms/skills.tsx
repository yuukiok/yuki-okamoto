import { NextPage } from 'next'
import { Skill } from '../atoms/skill'
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiGraphql,
  SiJamstack,
  SiFirebase,
  SiVercel,
  SiHeroku,
  SiRstudio,
  SiPython,
  SiMongodb,
  SiC,
  SiJava,
  SiAndroid,
  SiSwift,
  SiIos,
  SiWordpress,
  SiNpm,
  SiYarn,
  SiGithub,
  SiBitbucket,
} from 'react-icons/si'
import { FaReact, FaSourcetree } from 'react-icons/fa'

export const Skills: NextPage = () => {
  const size = 64
  const skills = [
    { skill: 'JavaScript', imageurl: <SiJavascript size={size} /> },
    { skill: 'TypeScript', imageurl: <SiTypescript size={size} /> },
    { skill: 'React', imageurl: <FaReact size={size} /> },
    { skill: 'Next.js', imageurl: <SiNextdotjs size={size} /> },
    { skill: 'NestJS', imageurl: <SiNestjs size={size} /> },
    { skill: 'GraphQL', imageurl: <SiGraphql size={size} /> },
    { skill: 'Jamstack', imageurl: <SiJamstack size={size} /> },
    { skill: 'HTML 5', imageurl: <SiHtml5 size={size} /> },
    { skill: 'TailwindCSS', imageurl: <SiTailwindcss size={size} /> },
    { skill: 'CSS 3', imageurl: <SiCss3 size={size} /> },
    { skill: 'Sass', imageurl: <SiSass size={size} /> },
    { skill: 'Firebase', imageurl: <SiFirebase size={size} /> },
    { skill: 'R', imageurl: <SiRstudio size={size} /> },
    { skill: 'Python', imageurl: <SiPython size={size} /> },
    { skill: 'MongoDB', imageurl: <SiMongodb size={size} /> },
    { skill: 'C', imageurl: <SiC size={size} /> },
    { skill: 'Java', imageurl: <SiJava size={size} /> },
    { skill: 'Android', imageurl: <SiAndroid size={size} /> },
    { skill: 'Swift', imageurl: <SiSwift size={size} /> },
    { skill: 'Ios', imageurl: <SiIos size={size} /> },
    { skill: 'Wordpress', imageurl: <SiWordpress size={size} /> },
    { skill: 'Vercel', imageurl: <SiVercel size={size} /> },
    { skill: 'Heroku', imageurl: <SiHeroku size={size} /> },
    { skill: 'Npm', imageurl: <SiNpm size={size} /> },
    { skill: 'Yarn', imageurl: <SiYarn size={size} /> },
    { skill: 'Github', imageurl: <SiGithub size={size} /> },
    { skill: 'Bitbucket', imageurl: <SiBitbucket size={size} /> },
    { skill: 'Sourcetree', imageurl: <FaSourcetree size={size} /> },
  ]
  return (
    <div className="flex overflow-x-auto">
      {skills &&
        skills.map((skill) => (
          <Skill key={skill.skill} skill={skill.skill} url={skill.imageurl} />
        ))}
    </div>
  )
}
