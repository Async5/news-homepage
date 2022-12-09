// Images
import ImageWeb3Mobile from '../assets/images/image-web-3-mobile.jpg'

// Components
import Button from '../components/Button'

const newArticles = [
  {
    id: 0,
    title: 'Hydrogen VS Electric Cars',
    text: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    id: 1,
    title: 'The Downsides of AI Artistry',
    text: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    id: 2,
    title: 'Is VC Funding Drying Up?',
    text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
]

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <img src={ImageWeb3Mobile} alt="web-mobile" />
          <div className="mt-7">
            <h1 className="text-head font-extrabold text-neutral-veryDarkBlue">
              The Bright Future of Web 3.0?
            </h1>
            <div>
              <p className="text-body mt-4 text-neutral-darkGrayishBlue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button text={'Read more'} />
            </div>
          </div>
        </div>
        <div>
          <h2>New</h2>
          {newArticles.map((item, index, list) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
