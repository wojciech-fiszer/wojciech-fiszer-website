import type { NextPage } from 'next'
import Layout from '../components/layout'
import Timeline, { TimelineData } from '../components/timeline'
import useTypedText from '../hooks/useTypedText'
import TextCursor from '../components/text-cursor'

const workExperience: TimelineData = [
  {
    companyName: 'Tink',
    companyLogo: '/tink-logo.svg',
    time: 'June 2022',
    title: 'Senior Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Sit amet nisl purus in mollis nunc sed id semper. Posuere ac ut consequat semper viverra nam libero. Dignissim convallis aenean et tortor at risus viverra.',
  },
  {
    companyName: 'Tink',
    companyLogo: '/tink-logo.svg',
    time: 'May 2021',
    title: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Eleifend donec pretium vulputate sapien nec. Nam libero justo laoreet sit amet. Ornare arcu dui vivamus arcu felis bibendum..',
  },
  {
    companyName: 'Danske Bank',
    companyLogo: '/danske-bank-logo.svg',
    time: 'August 2020',
    title: 'Senior Java Developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Quis risus sed vulputate odio ut. Pharetra convallis posuere morbi leo urna. Neque sodales ut etiam sit amet nisl purus.',
  },
  {
    companyName: 'Bosch',
    companyLogo: '/bosch-logo.svg',
    time: 'June 2019',
    title: 'Software Developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. In hendrerit gravida rutrum quisque non tellus. Quam elementum pulvinar etiam non.',
  },
  {
    companyName: 'StepStone',
    companyLogo: '/stepstone-logo.svg',
    time: 'February 2018',
    title: 'Big Data Developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id. Curabitur gravida arcu ac tortor. Nec dui nunc mattis enim ut tellus elementum sagittis. Eu tincidunt tortor aliquam nulla facilisi cras.',
  },
  {
    companyName: 'StepStone',
    companyLogo: '/stepstone-logo.svg',
    time: 'February 2016',
    title: 'Java Developer/Junior Java Developer/Software Engineer Intern',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id. Curabitur gravida arcu ac tortor. Nec dui nunc mattis enim ut tellus elementum sagittis. Eu tincidunt tortor aliquam nulla facilisi cras.',
  },
]

const Home: NextPage = () => {
  const { typedText: helloText, finished: helloTextFinished } = useTypedText(
    "Hello, I'm Wojciech Fiszer",
  )
  const helloTextTyping = !helloTextFinished
  const { typedText: introductionText, finished: introductionTextFinished } =
    useTypedText(
      helloTextFinished
        ? "I'm a software engineer based in Warsaw, Poland."
        : '',
    )
  const introductionTextTyping = !introductionTextFinished
  return (
    <Layout>
      <main className="container mx-auto md:px-8 px-4 max-w-[1000px] flex-1">
        <h1 id="about" className="pt-5 text-5xl font-semibold">
          {helloText}
          {helloTextTyping && <TextCursor typing={helloTextTyping} />}
        </h1>
        <p className="pt-5 text-3xl">
          {introductionText}
          {helloTextFinished && <TextCursor typing={introductionTextTyping} />}
        </p>
        <h2 id="work-experience" className="pt-5 text-2xl">
          Work experience
        </h2>
        <Timeline data={workExperience} />
      </main>
    </Layout>
  )
}

export default Home
