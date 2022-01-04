import styled from 'styled-components'
import Button from '../Button'

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

export default function Landing() {
  return (
    // Specify the url in the class for webpack to process
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
  )
}
