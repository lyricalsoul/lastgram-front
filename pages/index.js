import DiagonalImage from '../components/DiagonalImage'
import Card from '../components/Card'
import Button from '../components/Button'
import { Grid, Item } from '../components/grid'
import { Heading, Subheading, Paragraph, Code } from '../components/text'
import { BsTelegram } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <div style={{ padding: '1rem 0.5rem' }}>
        <Heading align="center">
        Track your music right from Telegram.
        </Heading>
      </div>
      <DiagonalImage src="/collage.jpg" alt="collage demonstration" />
      <br/>
      <br/>
      <Button href="https://t.me/lastgramrobot" launchTab ghost lightUp style={{ margin: '0 auto' }}>
        <div style={{ margin: 'auto 0', marginTop: '0.03rem' }}><BsTelegram size={18} /></div>
        <div style={{ margin: 'auto auto', marginLeft: '0.4rem' }}>Open on Telegram</div>
      </Button>
      <br/>
      <Grid>
      <Item>
        <Card>
          <Subheading>A featureful bot</Subheading>
          <Paragraph>
          Currently, lastgram features 20 commands, allowing users to show what they are listening, show how many scrobbles they have on a track/album/artist, generate collages, search for song lyrics, etc.
          You can see every single one of them by simply typing <Code>/</Code> on your direct messages with the bot.
          </Paragraph>
        </Card>
      </Item>
      <Item>
        <Card>
          <Subheading>Trusted and actually used</Subheading>
          <Paragraph>
          Lastgram is constantly used. On a month, the bot processes more than 3 million messages and 100k actual commands. With new features and support for more platforms, the bot will only keep on growing so users can properly enjoy their last.fm experience.
          </Paragraph>
        </Card>
      </Item>
      </Grid>
    </>
  )
}
