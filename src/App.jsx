import Icons from './components/icons'
import DrawersImage from './assets/drawers.jpg'
import AvatarImage from './assets/avatar-michelle.jpg'
import Footer from './components/Footer'
import clsx from 'clsx'
import { useState } from 'react'
import './App.pcss'

export default function App() {
  const [isShare, setIsShare] = useState(true)

  return (
    <>
      {/* mobile w 325px x h 515px */}
      <main className='card'>
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
              'author mx-[30px] h-[77px] items-center justify-between'
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
              'share h-[77px] items-center justify-between bg-primary-desaturated-dark-blue px-[30px]'
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
