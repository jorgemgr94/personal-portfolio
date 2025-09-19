import Head from 'next/head';
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Social from '@/components/Social';
import TechStack from '@/components/TechStack';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import Header from '@/components/Header';

export default function Index() {
  return (
    <main
      // transition:animate="fade"
      // className="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:grid-cols-12 lg:gap-4"
    >
      <Head>
        <title>Jorge García - Software Engineer</title>
      </Head>
      <Header />
      {/* <div className="relative w-full">
        <Navbar01 />
      </div> */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <About />
      <TechStack />
      <Experience />
      <Social />
    </main>
  );
}
