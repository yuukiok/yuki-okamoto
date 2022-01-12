import { NextPage } from 'next'
import { Skill } from '../atoms/skill'
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiGraphql,
  SiJamstack,
  SiFirebase,
  SiVercel,
  SiHeroku,
  SiGoland,
  SiPython,
  SiMysql,
  SiJava,
  SiAndroid,
  SiSwift,
  SiIos,
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export const Skills: NextPage = () => {
  const size = 64
  const skills = [
    { id: 0, skill: 'JavaScript', imageurl: <SiJavascript size={size} /> },
    { id: 1, skill: 'TypeScript', imageurl: <SiTypescript size={size} /> },
    { id: 2, skill: 'React', imageurl: <FaReact size={size} /> },
    { id: 3, skill: 'Next.js', imageurl: <SiNextdotjs size={size} /> },
    { id: 4, skill: 'HTML 5', imageurl: <SiHtml5 size={size} /> },
    { id: 5, skill: 'CSS 3', imageurl: <SiCss3 size={size} /> },
    { id: 6, skill: 'TailwindCSS', imageurl: <SiTailwindcss size={size} /> },
    { id: 7, skill: 'Sass', imageurl: <SiSass size={size} /> },
    { id: 8, skill: 'GraphQL', imageurl: <SiGraphql size={size} /> },
    { id: 9, skill: 'Jamstack', imageurl: <SiJamstack size={size} /> },
    { id: 10, skill: 'Firebase', imageurl: <SiFirebase size={size} /> },
    { id: 11, skill: 'Vercel', imageurl: <SiVercel size={size} /> },
    { id: 12, skill: 'Heroku', imageurl: <SiHeroku size={size} /> },
    { id: 13, skill: 'Golang', imageurl: <SiGoland size={size} /> },
    { id: 14, skill: 'Python', imageurl: <SiPython size={size} /> },
    { id: 15, skill: 'Mysql', imageurl: <SiMysql size={size} /> },
    { id: 16, skill: 'Java', imageurl: <SiJava size={size} /> },
    { id: 17, skill: 'Android', imageurl: <SiAndroid size={size} /> },
    { id: 18, skill: 'Swift', imageurl: <SiSwift size={size} /> },
    { id: 19, skill: 'Ios', imageurl: <SiIos size={size} /> },
  ]
  return (
    <div className="flex overflow-x-auto">
      {skills &&
        skills.map((skill) => (
          <Skill key={skill.id} skill={skill.skill} url={skill.imageurl} />
        ))}
    </div>
  )
}
