import styled from 'styled-components'
import { LoremIpsum } from 'lorem-ipsum'
import AboutImg from '../img/new.jpg'
import Button from './Button'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const StyledLanding = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    background: rgb(0 0 0 / 50%);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
`

export default function Home(): JSX.Element {
  return (
    <>
      <StyledLanding className="landing flex items-center bg-[url('/src/img/landing-food-truck.jpg')]">
        <div className="container relative text-center sm:mt-10 lg:mt-0">
          <div>
            <h1 className="block text-5xl font-bold">
              <span className="block md:inline">Welcome to </span>
              <span className="text-sky-400">Fish Fried Fresh</span>
            </h1>
            <h2 className="hidden md:inline-block mt-2 text-4xl max-w-md lg:max-w-full">
              High quality food truck with fresh fish on ice daily!
            </h2>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="btn lg dark">Our Menu</Button>
            <Button className="btn lg default">Place an Order</Button>
          </div>
        </div>
      </StyledLanding>

      <section className="about pt-20 pb-32 bg-gray-100">
        <div className="lg:grid lg:grid-cols-2 space-x-12" data-aos="fade-up">
          <div className="">
            <div>
              <h3 className="text-4xl text-gray-700 font-medium">About Us</h3>
              <div className="mt-8 font-sans text-gray-600">
                <p className="md:max-w-lg">{lorem.generateSentences(6)}</p>
                <p className="mt-6 md:max-w-lg">{lorem.generateSentences(4)}</p>
              </div>
              <div className="mt-6">
                <a href="#">Check Us Out</a>
              </div>
            </div>
          </div>

          <div className="flex justify-center content-center mt-12 lg:mt-0">
            <img src={AboutImg} loading="lazy" className="h-72 w-90 my-auto" />
          </div>
        </div>
      </section>
    </>
  )
}
