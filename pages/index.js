import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Form from "../pages/components/form.js"
const inter = Inter({ subsets: ['latin'] })

import daofm from "../public/Group 26.svg"
import daospot from "../public/daospot.svg"
import title from "../public/title.svg"
import reward from "../public/icons8-laurel-wreath-64 copy 2.png"
// import boiLogo from ""
import personal from "../public/Zp6-EvJr_400x400 10.45.11 AM.jpg"

export default function Home() {
  // const testing = () => {
  //   console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

  // }
  return (
    <>
      <Head>
        <title> Building On Imagination</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <div className='container'>
      <header>
        <Image  src={title} alt="title" />
          <p> Welcome to Building On Imagination, a project dedicated to the exhilarating process of transforming my ideas into reality.</p>
          <div className='callToAction'>
            <a className='sub' href='https://boimagination.substack.com/subscribe' target='_blink'>Subscribe to the newsletter</a>
            <a className='read' href='https://www.mohamedsadiq.me/blog/building-on-imagination' target='_blink'>What&apos;s BOI? </a>
          </div>
      </header>
      <div className='project_card'>
        <a href='https://www.daosspot.xyz/' target='_blink'>
        <div className='card'>
          <div className='top'>
            <div className='logo '>
              <Image src={daospot} alt="project's logo"/>
            </div>
            <div className='reward'>
              <Image src={reward} alt="reward's image"/>
              <span>4th product on PH</span>
              <div className='color_reward'></div>
            </div>
          </div>
          <p>A dedicated platform for DAOs: Search, explore, and learn about the world of the (DAOs) and their impact on the future of governance, finance, and innovation.</p>
          <a className='sub_card' href='https://www.daosspot.xyz/' target='_blink'>See the project</a>
        </div>
        </a>
        <a href='https://www.developerdaofm.com/' target='_blink'>
        <div className='card'>
          <div className='top'>
            <div className='logo fmlogo'>
              <Image src={daofm} alt="project's logo"/>
            </div>
            <div className='reward'>
              <Image src={reward} alt="reward's image"/>
              <span>Top Product on PH</span>
              <div className='color_reward'></div>
            </div>
          </div>
          <p>A vibrant space where you can immerse yourself in music while crafting and innovating, cultivating an inspiring atmosphere for creative expression and project development.</p>
          <a className='sub_card' href='https://www.developerdaofm.com/' target='_blink'>See the project</a>
          
        </div>
        </a>
      </div>
       </div>
       <footer>
        <div className='personal'>
          <Image src={personal} alt=""/>
        </div>
        <a className='me' href='https://twitter.com/sadiq_moo' target='_blink'>X (Twitter)</a>
        <a className='me' href='https://www.mohamedsadiq.me' target='_blink'>Website</a>
        <a className='me' href='https://github.com/mohamedsadiq' target='_blink'>Github</a>
        <a className='me' href='https://www.producthunt.com/@m_bronz0' target='_blink'>Product Hunt</a>
        <a className='me' href='https://www.linkedin.com/in/mohamed-sadiqcom/' target='_blink'>Linkedin</a>
        <p>@2023</p>
       </footer>
      </main>
    </>
  )
}

