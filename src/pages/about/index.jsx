import { Box, Card, Stack } from '@mui/material';
import { ImageContainer } from '../../components/ImageContainer.jsx';
import { aboutPageContent } from '../../constants/index.js';
import { SatisfactionIcon } from '../../icons/SatisfactionIcon.jsx';
import { ProcessIcon } from '../../icons/ProcessIcon.jsx';
import { NaturalProcessIcon } from '../../icons/NaturalProcessIcon.jsx';
import { Packaging } from '../../icons/Packaging.jsx';

export const AboutPage = () => {
  return (
    <>
      <Stack
        spacing={4}
        sx={{ marginRight: '-16px', marginLeft: '-18px' }}
        className='text-white'
      >
        <Box className='!pt-10 md:!pt-40 pb-20 px-10 bg-blue-400 rounded-b-4xl'>
          <p className='text-6xl font-bold font-roboto'>
            {aboutPageContent.section_one.heading}
          </p>
          <p className='text-xl tracking-wider mt-4'>
            <span className='font-semibold'>MACLAIN </span>
            {aboutPageContent.section_one.paragraph}
          </p>
        </Box>
      </Stack>
      <Stack className='py-20 gap-14'>
        <ImageContainer
          src={aboutPageContent.section_two.image_path}
          alt={aboutPageContent.section_two.image_alt}
          styles='w-auto h-[50%] object-cover rounded-xl '
        />

        <Stack className='gap-5'>
          <p className='tracking-wider text-lg '>
            {aboutPageContent.section_two.paragraph_one}
          </p>
          <p className='tracking-wider  text-lg'>
            {aboutPageContent.section_two.paragraph_two}
          </p>
          <p className='tracking-wider  text-lg'>
            {aboutPageContent.section_two.paragraph_three}
          </p>
          <p className='tracking-wider'>
            {aboutPageContent.section_two.paragraph_four}
          </p>
        </Stack>
        <Card className='p-4' sx={{ borderRadius: '24px' }}>
          <p className='text-6xl font-bold text-blue-400'>
            {aboutPageContent.section_three.heading_one}
          </p>
          <Stack className='gap-5'>
            <p className='tracking-wider  text-lg'>
              {aboutPageContent.section_three.paragraph_one}
            </p>
            <p className='tracking-wider  text-lg'>
              {aboutPageContent.section_three.paragraph_two}
            </p>
          </Stack>
        </Card>

        <Card className='p-4 rounded-md' sx={{ borderRadius: '24px' }}>
          <Stack direction='column' className='gap-4 items-center text-center'>
            <p className='text-6xl font-bold text-blue-400'>Our Some Quality</p>
            <p className='text-lg mb-10'>
              The main aim of our company is satisfying our customers by
              providing quality and safe products
            </p>

            <Stack direction='column' className='gap-4'>
              <div className='justify-center flex'>
                <ProcessIcon styles='h-20 w-20' />

                {/* <SewingIcon styles='h-20 w-20' /> */}
              </div>{' '}
              <p className='text-lg'>Product quality check process</p>
              <div className='justify-center flex'>
                <NaturalProcessIcon styles='h-24 w-24' />
              </div>
              <p className='text-lg'>Complete Natural Ingredients</p>
              <div className='justify-center flex'>
                <Packaging styles='h-20 w-20' />
              </div>
              <p className='text-lg'>Safe and Hygienic Packaging</p>
              <div className='justify-center flex'>
                <SatisfactionIcon styles='h-20 w-20' />
              </div>
              <p className='text-lg'>100% Customer Satisfaction</p>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};
