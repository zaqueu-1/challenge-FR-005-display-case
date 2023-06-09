import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Product from './components/Product/Product'
import { GiCat } from 'react-icons/gi'

export default function Home() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
      const res = await axios.get('db.json')
      setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Head>
        <title>BASTET</title>
        <meta name="description" content="Sua próxima loja de jóias favorita." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <h1>BASTET <GiCat className='logo'/></h1>
        </div>

        <div className="products-container">
          {products.map((product) => (
              <Product key={product.id}
                        product={product.product}
                        image={product.image}
                        price={product.price}
                        discount={product.discount}
                        qtd={product.qtd}
                        description={product.description}/>
            ))}
        </div>

        <div className='footer'>
          <p>Feito por Eduardo Zaqueu como parte do <a href='https://github.com/JCDMeira/challenge-roadmap-index' target='_blank'>desafio React</a> de Jean Meira</p>
        </div>
      </main>

    </div>
  )
}
