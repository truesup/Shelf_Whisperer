import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export default function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <Card className="w-full max-w-xl mx-auto p-8 shadow-md">
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
          content, adding new features, and making this a cozy, reader-friendly
          space.
        </p>
      </CardContent>
      <CardFooter className="pt-3 flex justify-center">
        <Button onClick={() => navigate('/mode-select')} className="py-4">
          Okay, let's find a book then!
        </Button>
      </CardFooter>
    </Card>
  )
}
