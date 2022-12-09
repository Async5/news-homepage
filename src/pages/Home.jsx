// Images
import ImageWeb3Mobile from '../assets/images/image-web-3-mobile.jpg'
import ImageWeb3Desktop from '../assets/images/image-web-3-desktop.jpg'

import ArticleImage1 from '../assets/images/image-retro-pcs.jpg'
import ArticleImage2 from '../assets/images/image-top-laptops.jpg'
import ArticleImage3 from '../assets/images/image-gaming-growth.jpg'

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

const articles = [
  {
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?',
    id: 0,
    articleImage: ArticleImage1,
  },
  {
    title: 'Top 10 Laptops of 2022',
    text: 'Our best picks for various needs and budgets.',
    id: 1,
    articleImage: ArticleImage2,
  },
  {
    title: 'The Growth of Gaming',
    text: 'How the pandemic has sparked fresh opportunities.',
    id: 2,
    articleImage: ArticleImage3,
  },
]

const Home = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <img
            className="md:hidden w-full"
            src={ImageWeb3Mobile}
            alt="web-mobile"
          />
          <img
            className="max-[768px]:hidden w-full"
            src={ImageWeb3Desktop}
            alt="web-desktop"
          />
          <div className="mt-7 lg:grid lg:grid-cols-2">
            <h1 className="text-head lg:text-6xl font-extrabold text-neutral-veryDarkBlue">
              The Bright Future of Web 3.0?
            </h1>
            <div className="lg:flex lg:justify-between lg:flex-col">
              <p className="text-body mt-4 lg:mt-0 text-neutral-darkGrayishBlue max-w-lg">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button text={'Read more'} />
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-neutral-veryDarkBlue p-5 mt-8 lg:mt-0">
          <h2 className="text-head2 font-bold text-primary-softOrange">New</h2>
          {newArticles.map((item, index, list) => {
            if (index === list.length - 1) {
              return (
                <article key={item.id}>
                  <h3 className="hover:text-primary-softOrange transition-all md:cursor-pointer text-neutral-offWhite text-xl font-bold mb-3 mt-8">
                    {item.title}
                  </h3>
                  <p className="text-body text-neutral-grayishBlue">
                    {item.text}
                  </p>
                </article>
              )
            }
            return (
              <article key={item.id}>
                <h3 className="hover:text-primary-softOrange transition-all md:cursor-pointer text-neutral-offWhite text-xl font-bold mb-3 mt-8">
                  {item.title}
                </h3>
                <p className="border-b border-solid border-l-neutral-darkGrayishBlue pb-8 text-body text-neutral-grayishBlue">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
      <div className="mt-16 lg:mt-20 pb-11 lg:grid lg:grid-cols-3">
        {articles.map((item, index, list) => (
          <article key={item.id} className="flex h-32 mb-9 lg:mb-0">
            <img className="mr-5" src={item.articleImage} alt="article" />
            <div>
              <span className="inline-block mb-3 font-extrabold text-3xl text-neutral-grayishBlue">
                {'0' + (item.id + 1)}
              </span>
              <h3 className="hover:text-primary-softRed transition-all md:cursor-pointer mb-1 font-extrabold text-lg text-neutral-veryDarkBlue">
                {item.title}
              </h3>
              <p className="text-body text-neutral-darkGrayishBlue">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Home
