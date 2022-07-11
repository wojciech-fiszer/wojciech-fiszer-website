import type { NextPage } from 'next'
import Layout from '../components/layout'
import Timeline, { TimelineData } from '../components/timeline'
import Image from 'next/image'

type WorkExperience = {
  companyName: string
  companyLogo: string
  timelineData: TimelineData
}[]

const workExperience: WorkExperience = [
  {
    companyName: 'Tink',
    companyLogo: '/tink-logo.svg',
    timelineData: [
      {
        time: 'June 2022',
        title: 'Senior Software Engineer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Sit amet nisl purus in mollis nunc sed id semper. Posuere ac ut consequat semper viverra nam libero. Dignissim convallis aenean et tortor at risus viverra.',
      },
      {
        time: 'May 2021',
        title: 'Software Engineer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Eleifend donec pretium vulputate sapien nec. Nam libero justo laoreet sit amet. Ornare arcu dui vivamus arcu felis bibendum..',
      },
    ],
  },
  {
    companyName: 'Danske Bank',
    companyLogo: '/danske-bank-logo.svg',
    timelineData: [
      {
        time: 'August 2020',
        title: 'Senior Java Developer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Quis risus sed vulputate odio ut. Pharetra convallis posuere morbi leo urna. Neque sodales ut etiam sit amet nisl purus.',
      },
    ],
  },
  {
    companyName: 'Bosch',
    companyLogo: '/bosch-logo.svg',
    timelineData: [
      {
        time: 'June 2019',
        title: 'Software Developer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. In hendrerit gravida rutrum quisque non tellus. Quam elementum pulvinar etiam non.',
      },
    ],
  },
  {
    companyName: 'StepStone',
    companyLogo: '/stepstone-logo.svg',
    timelineData: [
      {
        time: 'February 2018',
        title: 'Big Data Developer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id. Curabitur gravida arcu ac tortor. Nec dui nunc mattis enim ut tellus elementum sagittis. Eu tincidunt tortor aliquam nulla facilisi cras.',
      },
      {
        time: 'June 2016',
        title: 'Junior Java Developer/Java Developer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id. Curabitur gravida arcu ac tortor. Nec dui nunc mattis enim ut tellus elementum sagittis. Eu tincidunt tortor aliquam nulla facilisi cras.',
      },
      {
        time: 'February 2016',
        title: 'Software Engineer Intern',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Et malesuada fames ac turpis egestas.',
      },
    ],
  },
]

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 flex-1">
        <h1 className="pt-5 text-5xl font-semibold">
          Hello! I&apos;m Wojciech Fiszer
        </h1>
        <p className="pt-5 text-3xl">
          I&apos;m a software engineer based in Warsaw, Poland.
        </p>
        <h2 className="pt-5 text-2xl">Work experience</h2>
        {workExperience.map(({ companyName, companyLogo, timelineData }) => (
          <div key={companyName} className="pt-5">
            <Image
              width="150"
              height="40"
              src={companyLogo}
              alt={companyName}
            />
            <Timeline data={timelineData} />
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default Home
