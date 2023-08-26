'use client';

import { Form } from '@/components';
import { Button, Card, Link, Spacer } from '@nextui-org/react';
import NextLink from 'next/link';
import { createRef } from 'react';

const formRef = createRef<HTMLFormElement>();

const loginUser = () => {
  const formData = new FormData(formRef.current!);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  console.log({ email, password });
};

const Login = () => {
  return (
    <section className="relative h-screen flex justify-center items-center flex-col">
      <h2 className="text-5xl font-extrabold">Login Student</h2>
      <Spacer y={10} />
      <Card
        isBlurred
        className="relative bg-background/60 dark:bg-default-100/50 w-full max-w-[600px] px-3 py-5"
        shadow="sm"
      >
        <Form formRef={formRef} />
        <Button fullWidth type="button" onClick={loginUser} color="success">
          Log in
        </Button>
      </Card>
      <Spacer y={4} />
      <p>
        New Student{' '}
        <Link as={NextLink} href="/auth/register">
          Register
        </Link>
      </p>
    </section>
  );
};

export default Login;
