import Icons from './components/icons'
import DrawersImage from './assets/drawers.jpg'
import AvatarImage from './assets/avatar-michelle.jpg'
import Footer from './components/Footer'
import clsx from 'clsx'
import { useState } from 'react'
import './App.pcss'

export default function App() {
  const [isShare, setIsShare] = useState(false)

  return (
    <>
      {/* mobile  w 325px x h 515px */}
      {/* desktop w 730px x h 275px */}
      <main className='card'>
        {/* mobile  w 325px x h 200px */}
        {/* desktop w 280px x h 280px */}
        <section className='image'>
          <img src={DrawersImage} alt='Drawers image' />
        </section>
        <section className='information'>
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div
            className={clsx(
              isShare === true ? 'hidden' : 'flex',
              'author mx-[--m-sect] h-[77px] items-center justify-between md:h-[80px]'
            )}
          >
            <div>
              <img src={AvatarImage} alt='Avatar of Michelle Appleton' />
              <h3>
                Michelle Appleton <span>28 Jun 2020</span>
              </h3>
            </div>
            <button onClick={() => setIsShare(true)}>
              <Icons.IconShare />
            </button>
          </div>
          <div
            className={clsx(
              isShare === false ? 'hidden' : 'flex',
              'share h-[80px] max-md:items-center max-md:justify-between max-md:bg-primary-desaturated-dark-blue max-md:px-[30px] md:pl-[400px] md:pt-[calc(calc(80px-40px)/2)]'
            )}
          >
            <div>
              <h3>Share</h3>
              <a
                href='http://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icons.IconFacebook />
              </a>
              <a href='http://x.com' target='_blank' rel='noopener noreferrer'>
                <Icons.IconTwitter />
              </a>
              <a
                href='http://pinterest.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icons.IconPinterest />
              </a>
            </div>
            <div className='cube'></div>
            <button onClick={() => setIsShare(false)}>
              <Icons.IconShare />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
