import'.//App.css';
import React from 'react';
import { NavLink} from 'react-router-dom'; 
import'.//menu.css';



function Menu(props) {
return (
   
<div>

<ul>
    

<NavLink to='/'>

<li>Acceuil</li>
</NavLink>
<NavLink to='/inscription'>
<li>inscription</li>
</NavLink>
<NavLink to='/Apropos'>
<li>apropos</li>
</NavLink>

<NavLink to='/produit'>
<li>produit</li>
</NavLink>
<NavLink to='/Contact'>
<li>contact</li>
</NavLink>


</ul>
</div>
);
}
export default Menu;
