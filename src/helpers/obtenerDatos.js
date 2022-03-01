import { endPoint } from '../helpers/Data';

export const traerDatos = async (page) => {
    console.log(endPoint)
const data = await fetch (endPoint) //el fetch hace una peticion a un recurso que necesites
const resp = await data.json()

console.log(resp, 'traerDatos')
}