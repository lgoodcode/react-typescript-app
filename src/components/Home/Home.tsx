import { LoremIpsum } from 'lorem-ipsum'
import Landing from './Landing'
import AboutImg from '../../img/new.jpg'

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

export default function Home(): JSX.Element {
  return (
    <>
      <Landing />

      <section className="about pt-20 pb-32 bg-gray-100">
        <div className="lg:grid lg:grid-cols-2 space-x-12" data-aos="fade-up">
          <div className="">
            <div>
              <h3 className="text-4xl text-gray-700 font-medium">About Us</h3>
              <div className="mt-8 text-gray-600">
                <p className="md:max-w-lg">{lorem.generateSentences(6)}</p>
                <p className="mt-6 md:max-w-lg">{lorem.generateSentences(4)}</p>
              </div>
              <div className="mt-6">
                <button className="btn default">
                  <a href="#about">Check Us Out</a>
                </button>
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
