
export const TiposBasicos = () => {
  
  const nombre: string = 'Jesús';
  const edad: number = 51;
  const estaActivo: boolean = true;

  const familiaSoprano: string[] = ['Tony','Carmela','Meadow', 'Antony jr'];

  return (
      <>
        <h3>Tipos Básicos</h3>
        {nombre}, {edad}, {(estaActivo)? 'activo' : 'inactivo'}
        <br />
        {familiaSoprano.join(', ')}
      </>
  )

}
