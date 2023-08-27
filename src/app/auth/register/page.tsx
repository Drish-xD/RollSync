'use client';

import { RegisterForm } from '@/components';
import { Button, Card, Link, Spacer } from '@nextui-org/react';
import NextLink from 'next/link';
import { createRef } from 'react';

const formRef = createRef<HTMLFormElement>();

const registerUser = () => {
  const formData = new FormData(formRef.current!);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  console.log({ email, password });
};

const Register = () => {
  return (
    <section className="relative h-screen flex justify-center items-center flex-col">
      <h2 className="text-5xl font-extrabold">Register Student</h2>
      <Spacer y={10} />
      <Card
        isBlurred
        className="relative bg-background/60 dark:bg-default-100/50 w-full max-w-[600px] px-3 py-5"
        shadow="sm"
      >
        <RegisterForm formRef={formRef} />
        <Button fullWidth type="button" onClick={registerUser} color="success">
          Sign in
        </Button>
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
