import axios from 'axios';
import { setCookie } from 'cookies-next';

axios.defaults.baseURL = 'http://localhost:3001';

const loginAuth = async (email: string, password: string): Promise<boolean> => {
  try {
    const { data } = await axios.get('/users', {
      params: {
        email,
        password
      }
    });

    if (!data[0]) throw new Error('No user Found');

    setCookie('user', data[0].user_id);
    return true;
  } catch (error) {
    throw new Error('Incorrect credentials or No user found!!!');
  }
};

const getUserDetails = async (userId: number) => {
  try {
    const { data } = await axios.get('/users', {
      params: {
        user_id: userId
      }
    });

    if (!data[0]) throw new Error('No user Found');

    const userDetails = { ...data[0] };
    delete userDetails.password;

    return userDetails;
  } catch (error) {
    throw new Error('Incorrect credentials or No user found!!!');
  }
};

const registerAuth = async () => {};

export { getUserDetails, loginAuth, registerAuth };
