
export const TiposBasicos = () => {

    const nombre: string = 'Raquel';
    const edad: number = 23;
    const estaActivo: boolean = true;

    const poderes: string[] = []; // ['Velocidad','Volar','Respirar bajo el agua'];

    return (
    <>
        <h3>TiposBasicos</h3>
        {nombre}, { edad }, { (estaActivo) ? 'activo' : 'no activo'}
        <br/>
        { poderes.join(', ')}
    </>
  )
}
