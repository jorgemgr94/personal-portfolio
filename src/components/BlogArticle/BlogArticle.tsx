import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  title: string;
  imageSrc: string;
  slug: string;
  excerpt: string;
  date: string;
  readingTime: {
    text: string;
  };
};

interface BlogArticleProps {
  blog?: Blog;
}

// NOTE: just for testing purposes, this MUST be removed once BlogArticle is actually implemented.
const defaultBlog = {
  title: 'Que es Lorem Ipsum',
  imageSrc: '/assets/images/blog.png',
  slug: 'slug?',
  excerpt:
    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
  date: '2023-01-01',
  readingTime: {
    text: '2 hours'
  }
};

export default function BlogArticle ({ blog = defaultBlog }: BlogArticleProps) {
  return (
    <article className="bg-white dark:bg-darkSecondary rounded-2xl p-2 flex flex-col sm:flex-row items-center w-ull sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg">
      <div className="w-full">
        <Image
          title={blog.title}
          alt={blog.title}
          src={blog.imageSrc}
          width={1200}
          height={600}
          blurDataURL={blog.imageSrc}
          quality={100}
          className="my-auto transition-all duration-300 backdrop-blur-xl rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5 md:pr-5">
        <Link
          href={`/blogs/${blog.slug}`}
          className="font-bold text-neutral-900 md:text-x hover:underline"
        >
          {blog.title}
        </Link>
        <p className="text-gray-900 mt-3 text-sm sm:text-xs md:text-sm line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="z-10 flex items-center gap-3 font-barlow">
            <div className="w-[30px]">
              <Image
                alt="Jatin Sharma"
                height={30}
                width={30}
                src={'/assets/images/me.jpg'}
                className="rounded-full m-0! h-full"
              />
            </div>
            <div className="flex flex-col">
              <Link
                href="/about"
                className="text-sm font-bold hover:underline text-black"
              >
                Jorge García
              </Link>
              <span className="text-xs text-gray-500 dark:text-dark-3">
                {new Date(blog.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <p className="flex items-center justify-between text-xs font-medium text-gray-500 md:text-sm">
            <span>{blog.readingTime.text}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
