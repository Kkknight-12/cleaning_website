import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { homePageContent } from '../../constants/index.js';
import { ImageCard } from '../../components/ImageCard.jsx';
import { ButtonComponent } from '../../components/Button.jsx';
import { ImageContainer } from '../../components/ImageContainer.jsx';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={4} className='p-4' alignItems='center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Box className='order-2 md:order-1'>
          <p className='text-2xl tracking-wider'>
            {homePageContent.section_one.heading}
          </p>
          <p className='text-base mt-3 tracking-wider'>
            {homePageContent.section_one.paragraph}
          </p>

          <ButtonComponent
            button_text={homePageContent.section_one.button_text}
            variant='outlined'
            styles='!mt-10'
            onClick={() => navigate('/about/clean')}
          />
        </Box>

        <ImageContainer
          src={homePageContent.section_one.image_path}
          alt={homePageContent.section_one.image_alt}
          styles='w-auto h-full object-cover rounded-tl-xl rounded-bl-xl order-1 md:order-2'
        />
      </div>

      <ImageCard
        styles='mb-3 bg-blue-500 rounded-xl p-7 text-center text-white w-full md:!flex-row-reverse gap-4 tracking-wider md:text-left'
        heading={homePageContent.section_two.heading}
        paragraph={homePageContent.section_two.paragraph}
        image_path={homePageContent.section_two.image_path}
        image_alt={homePageContent.section_two.image_alt}
      />

      <Box className='bg-blue-500 rounded-xl p-7 text-center w-full'>
        <Stack spacing={5}>
          <ImageCard
            styles='mb-3 text-center text-white'
            heading={homePageContent.section_three.heading}
            paragraph={homePageContent.section_three.paragraph}
            image_path={homePageContent.section_three.image_path}
            image_alt={homePageContent.section_three.image_alt}
          />

          <ButtonComponent
            button_text={homePageContent.section_three.button_text}
            variant='outlined'
            styles='w-fit !border-[white] text-base !text-white'
            onClick={() => navigate('/about/hygienic')}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
