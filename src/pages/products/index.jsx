import { Stack } from '@mui/material'
import { ImageContainer } from '../../components/ImageContainer.jsx'
import { productsPageContent } from '../../constants/index.js'

export const ProductsPage = () => {
  return (
    <Stack className="items-center mt-20">
      <p className="text-6xl font-bold text-blue-400 mb-10">Products</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productsPageContent.map((product) => {
          return (
            <Stack key={product.id} className="items-center flex-wrap">
              <div className="max-w-[200px] md:max-w-full !mx-auto">
                <ImageContainer
                  src={product.image_path}
                  alt={product.image_alt}
                  styles="object-contain rounded-2xl overflow-hidden max-h-[400px]"
                />
                <Stack spacing={2} className="mt-5">
                  <p className="text-left text-blue-600 font-bold tracking-wide">
                    {`Price ₹ ${product.product_price}`}
                  </p>
                  <p className="text-center text-lg font-medium tracking-wide">
                    {product.product_name}
                  </p>
                  <p className="text-justify text-base tracking-wide">
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