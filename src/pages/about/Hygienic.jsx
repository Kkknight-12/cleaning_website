import { Box, Stack } from '@mui/material'
import { hygienicPageContent } from '../../constants/index.js'
import { ImageContainer } from '../../components/ImageContainer.jsx'

export const Hygienic = () => {
  return (
    <>
      <Stack spacing={6} sx={{ marginX: -3 }} className="">
        <Box className="!pt-10 md:!pt-40 pb-20 px-10 bg-blue-400 rounded-b-4xl">
          <p className="text-6xl font-bold text-white">
            {hygienicPageContent.heading_one}
          </p>
          <p className="text-xl tracking-wider mt-4 text-white">
            {hygienicPageContent.paragraph_one}
          </p>
        </Box>
      </Stack>
      <Stack className="py-20 gap-14">
        <div className="grid md:grid-cols-2 gap-10 mx-auto">
          <ImageContainer
            src={hygienicPageContent.image_one_path}
            alt={hygienicPageContent.image_one_alt}
            styles="w-auto h-full max-h-[600px] object-cover rounded-xl "
          />

          <ImageContainer
            src={hygienicPageContent.image_one_path}
            alt={hygienicPageContent.image_one_alt}
            styles="w-auto h-full max-h-[600px]  object-cover rounded-xl "
          />
        </div>

        <p className="text-lg">{hygienicPageContent.paragraph_two}</p>
      </Stack>
    </>
  )
}