import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skill from '../components/Skills'
import { FULL_NAME, JOB_TITLE } from '../utils/constants'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{FULL_NAME} | {JOB_TITLE}</title>
        <meta property="og:title" content="Nguyen Tien Loc | Front-End Developer" />
        <meta name="description" content="I'm Front-End Developer with ReactJS and NextJS experiences" />
        <meta property="og:description" content="I'm Front-End Developer with ReactJS and NextJS experiences" />
        <meta property="og:url" content={process.env.ROOT_URL} />
        <meta property='og:image' content={`${process.env.ROOT_URL}/assets/avatar.jpg`} />
      </Head>
      <Main />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  )
}
