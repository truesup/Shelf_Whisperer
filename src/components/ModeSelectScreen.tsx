import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Settings } from 'lucide-react'

export default function ModeSelectScreen() {
  return (
    <div className="w-3/4">
      <h2 className="w-full text-2xl font-semibold text-center mb-6">
        This app offers two ways to find your next book — depending on your
        current mood:
      </h2>
      <div className="flex align-center justify-center gap-6">
        <Card className="flex-1/2">
          <CardHeader className="flex align-center justify-between">
            <CardTitle>Option one - describe your mood</CardTitle>
            <Sparkles className="text-foreground h-[20px] w-[20px]" />
          </CardHeader>
          <CardContent className="text-justify">
            <p>
              Not sure what you want to read? Just tell us how you feel or what
              you’re in the mood for — in a sentence or two. We’ll take it from
              there and suggest something that matches your vibe.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Surprise me!</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/2">
          <CardHeader className="flex align-center justify-between">
            <CardTitle>Option two - be specific</CardTitle>
            <Settings className="text-foreground h-[20px] w-[20px]" />
          </CardHeader>
          <CardContent className="text-justify">
            <p>
              Already know what you’re looking for? Use this mode to fine-tune
              your request: pick a genre, setting, type of protagonist, or key
              plot details — and we’ll tailor the book suggestions just for you.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose details</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
