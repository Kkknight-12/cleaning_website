import { Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

export const Footer = () => {
  return (
    <>
      <Stack className="p-5 gap-10  md:!flex-row md:items-center mt-10">
        <a className="text-base tracking-normal text-neutral-500">
          Terms and condition
        </a>
        <a className="text-base tracking-normal text-neutral-500">
          Privacy Policy
        </a>
        <a className="text-base tracking-normal text-neutral-500">About Us</a>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        className="mb-10"
      >
        <FacebookIcon className="!fill-blue-700" />
        <InstagramIcon />
        <XIcon />
      </Stack>
    </>
  )
}