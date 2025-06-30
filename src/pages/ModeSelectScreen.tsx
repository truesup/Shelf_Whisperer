import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ModeSelectScreen() {
  const navigate = useNavigate()

  return (
    <div className="w-3/4 flex align-stretch justify-center gap-6">
      <Card className="flex-1/2 select-none transition-all duration-300 hover:scale-[1.002] hover:shadow-2xl">
        <CardHeader className="text-xl flex align-center justify-between">
          <CardTitle>Let the mood guide you</CardTitle>
          <Sparkles className="text-foreground h-[20px] w-[20px]" />
        </CardHeader>
        <CardContent className="text-justify">
          <p>
            Not quite sure what to read next? Just tell us how you’re feeling —
            cozy, restless, curious, nostalgic — and we’ll suggest a book that
            captures your emotional state. No need to overthink it: a sentence
            or two is enough for our AI to match your vibe to a fitting story.
            It’s perfect for those moments when you crave a mood rather than a
            genre. Whether you’re winding down after a long day or yearning for
            a bit of wonder, we’ll pick something that resonates. You don’t need
            to name a book or author — just describe the feeling, and we’ll
            handle the rest.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => navigate('/quick-search')}>
            Surprise me!
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex-1/2 select-none transition-all duration-300 hover:scale-[1.002] hover:shadow-2lyxl">
        <CardHeader className="text-xl flex align-center justify-between">
          <CardTitle>Craft your perfect story</CardTitle>
          <Settings className="text-foreground h-[20px] w-[20px]" />
        </CardHeader>
        <CardContent className="text-justify">
          <p>
            Have something more specific in mind? This mode gives you full
            control: choose the genre, tone, setting, character types, themes —
            even the kind of ending you’d prefer. Ideal for when you know what
            you’re looking for and want to fine-tune the experience. You can mix
            and match options to create your perfect story prompt. Looking for a
            dark mystery in a snowy village with an uplifting ending? We’ve got
            you. It’s a great way to explore new books that check all your boxes
            — without endless scrolling and bla bla bla bla bla bla.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => navigate('/detailed-search')}>
            Choose details
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
