import Link from 'next/link';
import Image from 'next/image';

export default function PageNotFound404 () {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col items-center text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
        <div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
          <header className="mb-6">
            <h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
              404
            </h2>
            <h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
              Oops! Page not found!
            </h3>
          </header>

          <p className="max-w-sm mb-5 leading-5 md:leading-7">
            {
              "We are very sorry for inconvenience. It looks like you're trying to access a page that has been deleted or never even existed."
            }
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href={'/'}>Back to home</Link>
          </button>
        </div>
        <div className="max-w-lg">
          <Image
            alt="sad milk"
            className="rounded-full"
            src="/assets/images/sad-milk.gif"
          />
        </div>
      </div>
    </div>
  );
}
