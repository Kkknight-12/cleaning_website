import { Box, Stack } from '@mui/material'
import { ImageContainer } from '../../components/ImageContainer.jsx'
import { aboutPageContent } from '../../constants/index.js'

export const AboutPage = () => {
  return (
    <>
      <Stack spacing={4} sx={{ marginX: -3 }} className="text-white">
        <Box className="!pt-10 md:!pt-40 pb-20 px-10 bg-blue-400 rounded-b-4xl">
          <p className="text-6xl font-bold">
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