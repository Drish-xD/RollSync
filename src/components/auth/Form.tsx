'use client';

import { Checkbox, Input, Link, Spacer } from '@nextui-org/react';
import NextLink from 'next/link';
import { RefObject, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

export default function Form({ formRef }: { formRef: RefObject<HTMLFormElement> }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <form ref={formRef}>
      <Input
        type="text"
        label="Email"
        name="email"
        placeholder="Enter your email"
        description="without '@srmist.edu.in"
        fullWidth
        isRequired
        endContent={<p className="pointer-events-none flex items-center">@srmist.edu.in</p>}
      />
      <Spacer y={5} />
      <Input
        placeholder="Enter your password"
        label="Password"
        name="password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye /> : <EyeOff />}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        fullWidth
        isRequired
      />
      <Spacer y={2} />
      <div className="flex justify-between">
        <Checkbox defaultSelected radius="full">
          Remember me
        </Checkbox>
        <Link as={NextLink} href="/" isDisabled title="Not implemented yet!!">
          Forgot password?
        </Link>
      </div>
      <Spacer y={2} />
    </form>
  );
}
