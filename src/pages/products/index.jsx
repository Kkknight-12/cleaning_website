import { Stack } from '@mui/material'
import { ImageContainer } from '../../components/ImageContainer.jsx'
import { productsPageContent } from '../../constants/index.js'

export const ProductsPage = () => {
  return (
    <Stack className="items-center mt-20">
      <p className="text-6xl font-bold text-blue-400 mb-10">Products</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsPageContent.map((product) => {
          return (
            <Stack
              key={product.id}
              className="items-center flex-wrap border border-gray-200 rounded-2xl p-5 bg-white-100 shadow-xl"
            >
              <div className="items-center justify-center flex flex-col max-w-[320px] md:max-w-full !mx-auto">
                <Stack spacing={2} className="mt-5">
                  <p className="text-center text-2xl font-bold tracking-wide">
                    {product.product_name}
                  </p>
                  <ImageContainer
                    src={product.image_path}
                    alt={product.image_alt}
                    styles="object-contain rounded-2xl overflow-hidden max-h-[400px] "
                  />
                  <p className="text-justify text-lg tracking-wide">
                    {product.product_description}
                  </p>
                </Stack>
              </div>
            </Stack>
          )
        })}
      </div>
    </Stack>
  )
}