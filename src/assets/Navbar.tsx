import React, { useState } from 'react' ; 
interface NavItem { 
    label: string;
    href: string;
}
interface NavbarProps { 
    logo : string;
    items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, items }) => {
const [isOpen, setIsOpen] = useState(false);

return (
    <nav style={{backgroundColor: '#333', color: '#fff', padding: '10px'}}>
    
       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        
          <h2>{logo}</h2>

             <button 
               onClick={() => setIsOpen(!isOpen)}
                             style={{backgroundColor: '#555', color: '#fff', border: 'none', fontSize: '1.6rem', padding: '10px', cursor: 'pointer'}}
                                >
                                    {isOpen ? 'Close' : 'Menu'}
           </button>

        </div>
        <ul style={{display: isOpen ? 'block' : 'none', listStyleType: 'none', padding: 0, margin: 0}}>
            {items.map((item, index) => (
                <li key={index} style={{padding: '10px 0'}}>
                    <a href={item.href} style={{color: '#fff', textDecoration: 'none'}}>{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>
)

}