import { Link, Stack, Tooltip } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const Footer = () => {
  return (
    <div className="bg-gray-200">
      <Stack className="p-5 gap-10 md:!flex-row md:items-center mt-10">
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
        className="pb-10"
      >
        <Link
          href="https://www.facebook.com/Maclain.in?mibextid=hu50Ix"
          target="_blank"
        >
          <FacebookIcon className="!fill-blue-700" />
        </Link>
        <Link
          href="https://www.instagram.com/maclain583?igsh=NWN0MjRyMmYzNzM4"
          target="_blank"
        >
          <InstagramIcon className="!fill-inherit" />
        </Link>
        <Tooltip title="+91 98259 27366">
          <WhatsAppIcon />
        </Tooltip>
      </Stack>
    </div>
  )
}