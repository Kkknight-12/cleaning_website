import { Stack } from '@mui/material'
import { washPageContent } from '../../constants/index.js'
import { ImageContainer } from '../../components/ImageContainer.jsx'

export const Wash = () => {
  return (
    <Stack spacing={6} className="mt-20">
      <p className="text-6xl text-blue-400 mt-20">
        {washPageContent.heading_one}
      </p>

      <p className="text-lg mt-20">{washPageContent.paragraph_one}</p>

      <ImageContainer
        src={washPageContent.image_one_path}
        alt={washPageContent.image_one_alt}
        styles="w-auto h-full object-cover rounded-xl "
      />

      <p className="text-lg mt-20">{washPageContent.paragraph_two}</p>
    </Stack>
  )
}