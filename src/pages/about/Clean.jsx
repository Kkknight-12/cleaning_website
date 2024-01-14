import { cleanPageContent } from '../../constants/index.js'
import { Stack } from '@mui/material'
import AlternateImageComponent from '../../components/AlternateImageComponent.jsx'

export const Clean = () => {
  return (
    <Stack>
      <p className="text-6xl text-blue-400 mt-20">
        Lorem ipsum dolor sit amet.
      </p>
      <AlternateImageComponent
        paragraph={cleanPageContent.paragraph_one}
        imageUrl={cleanPageContent.image_one_path}
        imageAlt={cleanPageContent.image_one_alt}
        imageOrder={1}
      />

      <AlternateImageComponent
        paragraph={cleanPageContent.paragraph_two}
        imageUrl={cleanPageContent.image_two_path}
        imageAlt={cleanPageContent.image_two_alt}
        imageOrder={2}
      />

      <AlternateImageComponent
        paragraph={cleanPageContent.paragraph_three}
        imageUrl={cleanPageContent.image_three_path}
        imageAlt={cleanPageContent.image_three_alt}
        imageOrder={1}
      />
    </Stack>
  )
}