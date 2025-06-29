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
import FlowerIcon from '../assets/imgs/welcome-icons/flower.svg'
import TeaCupIcon from '../assets/imgs/welcome-icons/tea.svg'
import MoonIcon from '../assets/imgs/welcome-icons/moon.svg'
import PeroIcon from '../assets/imgs/welcome-icons/pero.svg'
import CandleIcon from '../assets/imgs/welcome-icons/candle.svg'
import TwoBooksIcon from '../assets/imgs/welcome-icons/books.svg'
import LightIcon from '../assets/imgs/welcome-icons/light.svg'
import LoopaIcon from '../assets/imgs/welcome-icons/lupa.svg'
import CatIcon from '../assets/imgs/welcome-icons/cat.svg'

export default function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <>
      <Card className="w-full max-w-xl mx-auto py-6 px-4 shadow-md transition-all duration-300 hover:scale-[1.002] hover:shadow-2xl">
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
        src={FlowerIcon}
        alt=""
        className="absolute top-[6%] left-[8%] w-18 icon-wiggle"
      />

      <img
        src={BookOpenedIcon}
        alt=""
        className="absolute top-[5%] left-[30%] w-32 icon-float"
      />

      <img
        src={TeaCupIcon}
        alt=""
        className="absolute top-[5%] left-[58%] w-28 icon-wiggle"
      />

      <img
        src={MoonIcon}
        alt=""
        className="absolute top-[8%] right-[8%] w-24 icon-float"
      />

      <img
        src={PeroIcon}
        alt=""
        className="absolute top-[44%] right-[4%] w-20 icon-tilt"
      />

      <img
        src={CandleIcon}
        alt=""
        className="absolute bottom-[6%] right-[8%] w-22 icon-wiggle"
      />

      <img
        src={TwoBooksIcon}
        alt=""
        className="absolute bottom-[4%] right-[32%] w-32 icon-float"
      />

      <img
        src={LightIcon}
        alt=""
        className="absolute bottom-[3%] right-[62%] w-14 icon-wiggle"
      />

      <img
        src={LoopaIcon}
        alt=""
        className="absolute bottom-[5%] right-[84%] w-22 icon-float"
      />

      <img
        src={CatIcon}
        alt=""
        className="absolute bottom-[34%] left-[6%] w-32 icon-tilt"
      />
    </>
  )
}
