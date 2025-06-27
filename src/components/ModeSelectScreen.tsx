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
    <div className="w-3/4">
      <h2 className="w-full text-2xl font-semibold text-center mb-6">
        This app offers two ways to find your next book — depending on your
        current mood:
      </h2>
      <div className="flex align-center justify-center gap-6">
        <Card className="flex-1/2 select-none transition-all duration-300 hover:scale-[1.002] hover:shadow-xl">
          <CardHeader className="flex align-center justify-between">
            <CardTitle>Let the mood guide you</CardTitle>
            <Sparkles className="text-foreground h-[20px] w-[20px]" />
          </CardHeader>
          <CardContent className="text-justify">
            <p>
              Not quite sure what to read next? Just tell us how you're feeling
              — cozy, restless, curious, nostalgic — and we'll suggest a book
              that captures your emotional state. No need to overthink it: a
              sentence or two is enough for our AI to match your vibe to a
              fitting story.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => navigate('/quick-search')}>
              Surprise me!
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/2 select-none transition-all duration-300 hover:scale-[1.002] hover:shadow-xl">
          <CardHeader className="flex align-center justify-between">
            <CardTitle>Craft your perfect story</CardTitle>
            <Settings className="text-foreground h-[20px] w-[20px]" />
          </CardHeader>
          <CardContent className="text-justify">
            <p>
              Have something more specific in mind? This mode gives you full
              control: choose the genre, tone, setting, character types, themes
              — even the kind of ending you’d prefer. Ideal for when you know
              what you’re looking for and want to fine-tune the experience.
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
    </div>
  )
}
