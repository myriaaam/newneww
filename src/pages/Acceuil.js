


import React from 'react'; 

import Menu from '../Menu';
import water from '../water.jpg'; 


import Halo from './/car.js';

function Acceuil(props) {
return (
<div>

<h2>Accueil</h2>


<br></br>
<br></br>
<br></br>

    <Menu />
    <img src={water} widht="1000px" height="450px" alt=""/>


    
<br></br>
<br></br>
<br></br>
    <Halo />
<p>
Le Lorem Ipsum est simplement du faux texte employé 
dans la composition et la mise en page avant impression. L
<br></br>
e Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

</p>



</div>

	
);
}

export default Acceuil;
