import React, { FC, useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import { Link } from 'vtex.styleguide'
const MyComponent: FC = () => {
  const productContextValue = useProduct();
  const [ficha, setFicha] = useState()

  const getOnlyFicha = () => {
    if(productContextValue?.product?.properties){
      const element = productContextValue?.product?.properties.find((p:any) => p.name == "ficha")
      if(element && element.values[0]){
        setFicha(element.values[0])
        return
      }
    }
    setFicha(undefined);
  }

  useEffect(() => {
      getOnlyFicha()
  }, [productContextValue])

  return (
    <React.Fragment>
        {ficha ? 
        <Link href={ficha} target="_blank" class="logoFicha">
            <img height="120" width="120" src="/arquivos/logoFicha.png" />
        </Link>
        : "" }
    </React.Fragment>
  )
}

export default MyComponent