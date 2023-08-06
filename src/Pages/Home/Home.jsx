import { useEffect } from 'react'
import Hero from '../../components/Home/Hero'

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    })
    
    return (
      <Hero />
    )
}

export default Home