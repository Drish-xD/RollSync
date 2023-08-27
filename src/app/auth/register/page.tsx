'use client';

import { RegisterForm } from '@/components';
import { UserType } from '@/types';
import { Card, Link, Spacer } from '@nextui-org/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { createRef, useState } from 'react';
import { registerAuth } from 'utils/auth';

const formRef = createRef<HTMLFormElement>();

const Register = () => {
  const router = useRouter();
  const [errorMsg, seterrorMsg] = useState('');

  const registerUser = async () => {
    const formData = new FormData(formRef.current!);
    const fname = formData.get('fname') as string;
    const lname = formData.get('lname') as string;
    const class_ = Number(formData.get('class'));
    const section = formData.get('section') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email && !password && !fname && !lname && !class_ && !section) return;

    const userData: UserType = { fname, lname, class: class_, section, email, password };

    try {
      await registerAuth(userData);

      router.push('/auth/login');
    } catch (error) {
      if (error instanceof Error) seterrorMsg(error.message);
    }
  };

  return (
    <section className="relative h-screen flex justify-center items-center flex-col">
      <h2 className="text-5xl font-extrabold">Register Student</h2>
      <Spacer y={10} />
      <Card
        isBlurred
        className="relative bg-background/60 dark:bg-default-100/50 w-full max-w-[600px] px-3 py-5"
        shadow="sm"
      >
        <RegisterForm formRef={formRef} registerUser={registerUser} />
      </Card>
      <Spacer y={4} />
      <p>
        Already have a account{' '}
        <Link as={NextLink} href="/auth/login">
          Login
        </Link>
      </p>
    </section>
  );
};

export default Register;
