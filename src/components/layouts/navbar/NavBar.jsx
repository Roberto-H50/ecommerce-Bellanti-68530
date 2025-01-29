import ButtonComponent from '../../ButtonComponent.jsx';

import CartWidget from '../../common/carW
idget/CartWidget.jsx';
export default function NavBar() {
    return (
      <>
        <nav>
            
            <div>
                <h3>Todo Barber</h3>
             <ul>
                <ButtonComponent texto="Todo" />
                <ButtonComponent texto="Maquinas" />
                <ButtonComponent texto="Tijeras" />
                <ButtonComponent texto="Accesorios" />
             </ul>
             < CartWidget />
            </div>
          
        </nav>
      </>
    );
  }