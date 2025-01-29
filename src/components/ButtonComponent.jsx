export default function ButtonComponent({ texto }) {
    const mostrarAlert = () => {
      alert(`Ingresaste a la seccion ${texto}`);
    };
  
    return (
      <>
        <button onClick={mostrarAlert} >
          {texto}
        </button>
      </>
    );
  }
  