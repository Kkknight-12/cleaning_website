import { Box, Stack } from '@mui/material'
import { ImageContainer } from '../../components/ImageContainer.jsx'
import { aboutPageContent } from '../../constants/index.js'
import { SewingIcon } from '../../icons/sewingIcon.jsx'
import { ProcessIcon } from '../../icons/processIcon.jsx'
import { NaturalProcessIcon } from '../../icons/naturalProcessIcon.jsx'
import { Packaging } from '../../icons/Packaging.jsx'

export const AboutPage = () => {
  return (
    <>
      <Stack spacing={4} sx={{ marginX: -3 }} className="text-white">
        <Box className="!pt-10 md:!pt-40 pb-20 px-10 bg-blue-400 rounded-b-4xl">
          <p className="text-6xl font-bold font-roboto">
            {aboutPageContent.section_one.heading}
          </p>
          <p className="text-xl tracking-wider mt-4">
            {aboutPageContent.section_one.paragraph}
          </p>
        </Box>
      </Stack>
      <Stack className="py-20 gap-14">
        <ImageContainer
          src={aboutPageContent.section_two.image_path}
          alt={aboutPageContent.section_two.image_alt}
          styles="w-auto h-full object-cover rounded-xl "
        />

        <Stack direction="column" className="gap-4 items-center text-center">
          <p className="text-6xl font-bold text-blue-400">Our Some Quality</p>
          <p className="text-base mb-10">
            The main aim of our company is satisfying our customers by providing
            quality and safe products
          </p>

          <Stack direction="column" className="gap-4">
            <div className="justify-center flex">
              <SewingIcon styles="h-20 w-20" />
            </div>{' '}
            <p className="text-base">Product quality check process</p>
            <div className="justify-center flex">
              <ProcessIcon styles="h-20 w-20" />
            </div>
            <p className="text-base">Complete Natural Ingredients</p>
            <div className="justify-center flex">
              <NaturalProcessIcon styles="h-24 w-24" />
            </div>
            <p className="text-base">Safe and Hygienic Packaging</p>
            <div className="justify-center flex">
              <Packaging styles="h-20 w-20" />
            </div>
            <p className="text-base">100% Customer Satisfaction</p>
          </Stack>
        </Stack>

        <Stack className="gap-5">
          <p className="tracking-wider">
            {aboutPageContent.section_two.paragraph_one}
          </p>
          <p className="tracking-wider">
            {aboutPageContent.section_two.paragraph_two}
          </p>
          <p className="tracking-wider">
            {aboutPageContent.section_two.paragraph_three}
          </p>
          <p className="tracking-wider">
            {aboutPageContent.section_two.paragraph_four}
          </p>
        </Stack>
        <p className="text-6xl font-bold text-blue-400">
          {aboutPageContent.section_three.heading_one}
        </p>
        <Stack className="gap-5">
          <p className="tracking-wider">
            {aboutPageContent.section_three.paragraph_one}
          </p>
          <p className="tracking-wider">
            {aboutPageContent.section_three.paragraph_two}
          </p>
        </Stack>
      </Stack>
    </>
  )
}