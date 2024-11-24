import Icons from './components/icons'
import DrawersImage from './assets/drawers.jpg'
import AvatarImage from './assets/avatar-michelle.jpg'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* w 325px x h 515px */}
      <main className='mx-auto my-[calc(calc(100vh_-_calc(20px_+_515px))_/_2)] h-[515px] w-[320px] overflow-hidden rounded-xl bg-[#ffffff]'>
        <section className='h-[200px] w-full overflow-hidden object-cover'>
          <img src={DrawersImage} alt='Drawers image' />
        </section>
        <section className='h-[calc(515px_-_200px)] pt-[36px]'>
          <h2 className='mx-[30px] mb-[18px] text-[1.2em] font-bold leading-6 text-primary-desaturated-dark-blue'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className='mx-[30px] mb-[30px] w-[250px] text-[0.98em] font-medium text-primary-grayish-blue'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className='mx-[30px] flex h-14 items-center justify-between'>
            <div className='flex items-center justify-center'>
              <img
                src={AvatarImage}
                className='mr-4 h-10 w-10 rounded-full'
                alt='Avatar of Michelle Appleton'
              />
              <h3 className='flex flex-col text-[0.95em] font-bold text-primary-desaturated-dark-blue [&>span]:text-[0.85em] [&>span]:text-primary-grayish-blue'>
                Michelle Appleton <span>28 Jun 2020</span>
              </h3>
            </div>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-light-grayish-blue'>
              <Icons.IconShare />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
