import { Spinner } from '@nextui-org/spinner';

export default function Loading() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Spinner size="lg" color="primary" />
    </section>
  );
}
