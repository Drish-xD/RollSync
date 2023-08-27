import { UserType } from '@/types';
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

    setCookie('user', data[0].id);
    return true;
  } catch (error) {
    throw new Error('Incorrect credentials or No user found!!!');
  }
};

const getUserDetails = async (userId: number) => {
  const { data } = await axios.get('/users', {
    params: {
      id: userId
    }
  });

  if (!data[0]) throw new Error('No user Found');

  const userDetails = { ...data[0] };
  delete userDetails.password;

  return userDetails;
};

const registerAuth = async (data: UserType) => {
  const { data: existingUsers } = await axios.get('/users', {
    params: {
      email: data.email
    }
  });

  if (existingUsers.length > 0) {
    throw new Error('User with this email already exists');
  }

  await axios.post('/users', data);

  return true;
};

export { getUserDetails, loginAuth, registerAuth };
