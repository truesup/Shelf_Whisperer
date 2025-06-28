import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'

// в эту секцию можно воткнуть картинку питера пена (отсылка на магию, простоту, ребячество и все такое)

export default function QuickSearchForm() {
  return (
    <div className="flex flex-col gap-6 w-2/5">
      <h2 className="text-2xl font-semibold text-center">
        Feeling spontaneous?
      </h2>
      <p className="text-muted-foreground w-full text-center">
        No need to overthink it — just tell us what you’re in the mood for in a
        couple of sentences. We’ll handle the rest and suggest a book that fits
        your vibe.
      </p>
      <Textarea placeholder="Looking for a magical children’s story with a mischievous, adventurous hero who refuses to grow up and lives for wonder and fun." />
      <Button>Let the magic begin!</Button>
    </div>
  )
}

// Tip: Just a couple of sentences is enough. Be playful or poetic — we’ll do the rest!
