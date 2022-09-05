import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
	<>
	<Header/>
	<main className='w-screen bg-primary-portofolio pb-28'>
		{children}
	</main>
	</>

  )
}

export default Layout