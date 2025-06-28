import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import BookOpenedIcon from '../assets/imgs/welcome-icons/book-opened.svg'
import CandleIcon from '../assets/imgs/welcome-icons/candle.svg'
import CatIcon from '../assets/imgs/welcome-icons/cat.svg'
import ChairIcon from '../assets/imgs/welcome-icons/chair.svg'
import FlowerIcon from '../assets/imgs/welcome-icons/flower.svg'
import LampaIcon from '../assets/imgs/welcome-icons/lampa.svg'
import LightIcon from '../assets/imgs/welcome-icons/light.svg'
import LoopaIcon from '../assets/imgs/welcome-icons/lupa.svg'
import MoonIcon from '../assets/imgs/welcome-icons/moon.svg'
import PeroIcon from '../assets/imgs/welcome-icons/pero.svg'
import TeaCupIcon from '../assets/imgs/welcome-icons/tea-cup.svg'
import TwoBooksIcon from '../assets/imgs/welcome-icons/two-books.svg'

export default function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="relative">
      <Card className="w-full max-w-xl mx-auto py-6 px-4 shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold">
            Hello and welcome!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-base leading-relaxed text-justify space-y-4">
          <p>
            My name is Pavel, and I’m the creator of this small application. I
            built it to help people discover new books to read — stories that
            might inspire, comfort, or surprise you.
          </p>
          <p>
            Right now, the app is only available in English to reach a broader
            audience, but I hope to expand it over time. I’ll keep improving the
            content, adding new features, and making this a cozy,
            reader-friendly space.
          </p>
        </CardContent>
        <CardFooter className="pt-3 flex justify-center">
          <Button onClick={() => navigate('/mode-select')} className="py-4">
            Okay, let's find a book then!
          </Button>
        </CardFooter>
      </Card>

      <img
        src={BookOpenedIcon}
        alt=""
        className="absolute top-[-54%] left-[-50%] w-44"
      />

      <img
        src={FlowerIcon}
        alt=""
        className="absolute top-[-66%] left-[0] w-40"
      />

      <img
        src={MoonIcon}
        alt=""
        className="absolute top-[-56%] right-[16%] w-32"
      />

      <img
        src={TeaCupIcon}
        alt=""
        className="absolute top-[-60%] right-[-46%] w-40"
      />

      <img
        src={CandleIcon}
        alt=""
        className="absolute top-[0%] right-[-60%] w-36"
      />

      <img
        src={LampaIcon}
        alt=""
        className="absolute bottom-[0%] left-[130%] w-28"
      />

      <img
        src={ChairIcon}
        alt=""
        className="absolute bottom-[-60%] right-[-40%] w-42"
      />

      <img
        src={LoopaIcon}
        alt=""
        className="absolute bottom-[-52%] right-[6%] w-22"
      />

      <img
        src={PeroIcon}
        alt=""
        className="absolute bottom-[-56%] left-[40%] w-28"
      />

      <img
        src={TwoBooksIcon}
        alt=""
        className="absolute bottom-[-66%] left-[-140px] w-38"
      />

      <img
        src={CatIcon}
        alt=""
        className="absolute bottom-[-100px] left-[-320px] w-32"
      />

      <img
        src={LightIcon}
        alt=""
        className="absolute top-[18%] left-[-48%] w-30"
      />
    </div>
  )
}
