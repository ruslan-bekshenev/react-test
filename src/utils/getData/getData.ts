import axios from 'axios'
import { mapArrToString } from '../mapArrToString/mapArrToString';

export const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const usersId = response.data.map((user: any) => user.id)
    return mapArrToString(usersId)
  } catch(e) {
    console.log(e)
  }
}