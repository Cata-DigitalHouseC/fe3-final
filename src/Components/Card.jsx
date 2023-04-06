import React from "react";


const Card = ({ dentista}) => {

  const imgDentista='https://img.freepik.com/vector-gratis/hombre-dentista-examinando-dientes-paciente_1308-98143.jpg'

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    localStorage.setItem('dentista', JSON.stringify(dentistaSelected))
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      

        <h4>{dentista.name}</h4>
        <h5>{dentista.username}</h5>
        <img src={imgDentista} alt = "Foto dentista" className='card-img'/>
        <button>Ver detalle</button>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
