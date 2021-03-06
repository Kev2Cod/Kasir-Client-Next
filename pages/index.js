import { Fragment, useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

import ComboBox from "../components/ComboBox"

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Kevin Williams Permana' }
]

export default function Home() {
  const [loading, setLoading] = useState(false)
  const loop = [1, 2, 3, 4, 5, 6, 7, 8]

  useEffect(() => {
    setLoading(true)
    
  }, [])

  return (
    <div className="">
      <Head>
        <title>KasirApp | Home </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div class="grid grid-cols-12 px-5 mt-5 gap-2">
        <div class="col-span-8">
          <h2>Products</h2>
          <div className="flex gap-3">
            <div className="w-96 mt-3">
              <span className="mt-3">Category</span>
              <ComboBox people={people} />
            </div>

            <div className="w-96 mt-3">
              <span className="mt-3">Pelanggan</span>
              <ComboBox people={people} />
            </div>

          </div>


          <div className='mt-5 flex flex-wrap gap-2'>
            {loop.map((item) => (
              <Products />
            ))}
          </div>


        </div>
        <div class="col-span-4">
          <h2>Cart</h2>
          <div className="mt-5">
            <Cart />
          </div>
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
