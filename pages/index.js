import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Form from "../pages/components/form.js"
const inter = Inter({ subsets: ['latin'] })
import daofm from "../public/dfm.png"
import daospot from "../public/daospot.svg"

export default function Home() {
  const testing = () => {
    console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

  }
  return (
    <>
      <Head>
        <title> Building On Imagination</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}><div>
        
          </div>
        </div>

        <div className={styles.center}>
        <div className={ `${styles.thirteen} ${"project_border project_hight"}`}>
          <div className='projects'>
            
            <div className="project">
              <div className="project__image">
                <Image 
                src={daospot}
                 alt="dao fm" 
                 className='daospot_logo'
                 width={"72"}
                 objectFit="cover"
                 quality={100}
                /> 
              </div>
              <div className="project__info">
                <div className='top_product '>
                
                </div>
                <h2 className={inter.className}>DAOs Spot</h2>
                <p className={inter.className}>A place For DAOs, Search, explore
and Learn about DAOs</p>
                <div className="project__links">
                 <a href='https://www.daosspot.xyz/'>See the project</a>
                </div>
              </div>
             
            </div>
          </div>
          </div>
          <div className={`${styles.thirteen} ${"project_border project_hight"}`}>
          <div className='projects'>
            
            <div className="project">
              <div className="project__image">
                <Image 
                src={daofm}
                 alt="dao fm" 
                 layout="fill"
                 objectFit="cover"
                 quality={100}
                /> 
              </div>
              <div className="project__info">
                <div className='top_product '>
                  <span>🏆 Top Product on product hunt</span>
                </div>
                <h2 className={inter.className}>Developer DAO FM</h2>
                <p className={inter.className}>A place where you listen to music while building cool stuff.</p>
                <div className="project__links">
                 <a href='https://www.developerdaofm.com/'>See the project</a>
                </div>
              </div>
             
            </div>
          </div>
          </div>
          <div className={`${styles.thirteen} ${"project_border "}`}>
            
           <div className='inner_card inner_card_what'>
           
              <h2 className={inter.className}>What is Building On Imagination?</h2>
                <p className={inter.className}>Learn more about the project and idea behind it.</p>
                <a target="_blink" href='https://www.mohamedsadiq.me/blog/building-on-imagination' className={inter.className}>Read more</a>
           </div>
          </div>
          <div className={ `${styles.thirteen} ${styles.thirteen_form}`}>
          <div className='inner_card'>
          <Image
              src="/boi.svg"
              alt="13"
              width={56}
              height={31}
            className="logo"
            /> 
            <span>Join My Newsletter</span>
              <h3 className={inter.className}>Building On Imagination.</h3>
                <p className={inter.className}>Exploring and transforming ideas into reality.</p>
                <div>
               <Form />
                </div>
           </div>
          </div>
        </div>

        <div className={`${styles.grid} ${styles.links}`}>
          <a
            href="https://mohamedsadiq.me"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Site 
            </h2>
          
          </a>

          <a
            href="https://twitter.com/sadiq_moo"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Twitter
            </h2>
          
          </a>

          <a
            href="https://github.com/mohamedsadiq"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Github</h2>
           
          </a>

          <a
            href="https://boimagination.substack.com/p/building-on-imagination"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            Blog 
            </h2>
           
          </a>
        </div>
      </main>
    </>
  )
}

