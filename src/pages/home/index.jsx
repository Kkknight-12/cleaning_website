import { Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { homePageContent } from '../../constants/index.js'
import { ImageCard } from '../../components/ImageCard.jsx'
import { ButtonComponent } from '../../components/Button.jsx'
import { ImageContainer } from '../../components/ImageContainer.jsx'

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <Stack
      spacing={4}
      className="p-4 md:min-h-[1250px] lg:min-h-[1105px]  lg:h-[calc(100vh-313px)]"
      alignItems="center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Box className="order-2 md:order-1">
          <p className="text-4xl tracking-wider">
            <p className="text-blue-600 font-semibold">MACLAIN: </p>
            <p className="text-3xl ">{homePageContent.section_one.heading}</p>
          </p>

          <p className="text-lg mt-3 tracking-wider">
            <span className="font-semibold">Maclain </span>
            {homePageContent.section_one.paragraph}
          </p>
          <p className="text-lg mt-3 tracking-wider">
            <span className="font-semibold">Maclain </span>
            {homePageContent.section_one.para2}
          </p>

          <ButtonComponent
            button_text={homePageContent.section_one.button_text}
            variant="outlined"
            styles="!mt-10"
            onClick={() => navigate('/about')}
          />
        </Box>

        <ImageContainer
          src={homePageContent.section_one.image_path}
          alt={homePageContent.section_one.image_alt}
          styles="w-auto h-full object-cover rounded-tl-xl rounded-bl-xl order-1 md:order-2"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <ImageCard
          styles=" bg-blue-500 rounded-xl p-7 text-center text-white w-full md:!flex-row-reverse gap-4 tracking-wider md:text-left"
          heading={homePageContent.section_two.heading}
          paragraph={homePageContent.section_two.paragraph}
          image_path={homePageContent.section_two.image_path}
          image_alt={homePageContent.section_two.image_alt}
        />

        <Box className="bg-blue-500 rounded-xl p-7 text-center items-start w-full">
          <ImageCard
            styles="mb-3 text-center text-white"
            heading={homePageContent.section_three.heading}
            paragraph={homePageContent.section_three.paragraph}
            image_path={homePageContent.section_three.image_path}
            image_alt={homePageContent.section_three.image_alt}
          />
        </Box>
      </div>
      <div className="w-full flex justify-center rounded-md">
        <ButtonComponent
          styles="rounded-md"
          button_text={homePageContent.section_three.button_text}
          variant="outlined"
          onClick={() => navigate('/products')}
        />
      </div>
    </Stack>
  )
}