import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Overmenu from './components/ui/overmenu'
import HeaderDesktop from './components/ui/HeaderDesktop';
import HeaderMobile from './components/ui/HeaderDesktop';
import Hero from './components/sections/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Blog from './components/sections/Blog';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Overmenu />
      <HeaderDesktop />
      <HeaderMobile />
      <Hero />
      <WhyChooseUs/>
      <Blog />
  </StrictMode>,
)
