interface Persona {
    nombreCompleto: string;
    fn: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    calle: string;
    numero: number;
    pais: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Jesús Zúñiga Trejo',
        fn: '11/12/1969',
        edad: 51,
        direccion: {
            calle: 'coras',
            numero: 4,
            pais: 'México'
        }
    }

    return (
        <>
          <h3>Objetos Literales</h3>
          <code>
              <pre>
              {JSON.stringify(persona,null,2)}
              </pre>
          </code>
        
        </>
    )
}
