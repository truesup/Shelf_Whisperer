import { ChevronLeft, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../components/ui/tooltip'
import LittlePrinceImg from '../assets/imgs/modes/little-prince.jpg'
import { randomPrompts } from '../utils/static/easyModePrompts'

export default function QuickSearchForm() {
  const [promptValue, setPromptValue] = useState<string>('')
  const navigate = useNavigate()

  const putRandomPromtInTextArea = (): void => {
    if (randomPrompts.length === 0) return
    const randomIndex = Math.floor(Math.random() * randomPrompts.length)
    setPromptValue(randomPrompts[randomIndex])
  }

  return (
    <Card className="w-3/5 h-[560px] flex flex-row p-0">
      <div className="flex flex-col justify-between gap-4 p-6 flex-1">
        <CardHeader className="w-full p-0 flex items-center justify-between text-xl font-semibold">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="h-full aspect-square"
                size="icon"
                onClick={() => navigate('/mode-select')}>
                <ChevronLeft />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go back to mode select</p>
            </TooltipContent>
          </Tooltip>

          <span>Feeling spontaneous?</span>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="h-full aspect-square"
                size="icon"
                onClick={putRandomPromtInTextArea}>
                <Sparkles />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Randomize your prompt</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>

        <p className="text-muted-foreground text-justify">
          No need to overthink it — just tell us what you’re in the mood for in
          a couple of sentences. We’ll handle the rest and suggest a book that
          fits your vibe.
        </p>

        <Textarea
          placeholder="Looking for a magical children’s story..."
          className="h-full resize-none rounded-md"
          value={promptValue}
          onChange={e => setPromptValue(e.target.value)}
          autoComplete="off"
        />

        <CardFooter className="p-0">
          <Button className="w-full py-4">Let the magic begin!</Button>
        </CardFooter>
      </div>

      <img
        src={LittlePrinceImg}
        alt="Little Prince"
        className="h-full object-contain rounded-tr-xl rounded-br-xl"
      />
    </Card>
  )
}
