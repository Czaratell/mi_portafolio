
import './App.css'

import { Navbar } from './assets/Navbar'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
function App() {
  

  return (
    <>
      <Navbar logo="My Portfolio" items={menuItems} />
    </>
  )
}

export default App
