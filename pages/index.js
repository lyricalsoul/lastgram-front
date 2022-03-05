import DiagonalImage from '../components/DiagonalImage'
import { Text, Button, Spacer, Container } from '@nextui-org/react'
import { BsTelegram } from 'react-icons/bs'

export default function Home() {
  const center = { textAlign: 'center' }
  
  return (
    <div>
      <Text h1 style={{ textAlign: 'center' }}>
      Track your music right from Telegram.
      </Text>
      <Spacer />
      <DiagonalImage src="/collage.jpg" alt="collage demonstration" />
      <Spacer />
      <Button onClick={() => window.open("https://t.me/lastgramrobot", "_blank").focus()} icon={<BsTelegram />} style={{ margin: '0 auto' }} shadow ghost auto color="primary">
      Open on Telegram
      </Button>
      <Spacer y={3} />
      <div style={center}>
        <Text h3>A feature-full chatbot</Text>
        <Text p>
        Currently, lastgram features 20 commands, allowing users to show what they are listening, show how many scrobbles they have on a track/album/artist, generate collages, search for song lyrics, etc.
        You can see every single one of them by typing / on your direct messages with the bot.
        </Text>
      </div>
      <Spacer />
      <div style={center}>
        <Text h3>Trusted and actually used</Text>
        <Text p>
        Lastgram is constantly used. On a month, the bot processes more than 3 million messages and 100k actual commands. With new features and support for more platforms, the bot will only keep on growing so users can properly enjoy their last.fm experience.
        </Text>
      </div>
    </div>
  )
}
