import Link from 'next/link';
import Image from 'next/image';

type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    leavesWebsite: boolean;
  }[];
};

type FooterData = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: 'Home',
    path: '/'
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Designs',
    path: '/designs'
  }
];

export const footer: FooterData = {
  columns: [
    {
      title: 'Pages',
      links: [
        {
          name: 'Home',
          link: '/',
          leavesWebsite: false
        },
        {
          name: 'Projects',
          link: '/projects',
          leavesWebsite: false
        },
        {
          name: 'Designs',
          link: '/designs',
          leavesWebsite: false
        }
      ]
    },
    {
      title: 'Social',
      links: [
        {
          name: 'GitHub',
          link: 'https://github.com/jorgemgr94',
          leavesWebsite: true
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/jorgemgr94/',
          leavesWebsite: true
        }
      ]
    }
  ],
  support: {
    buymeacoffee: 'jorgemgr',
    paypal: 'jorgemgr',
    message: 'I appreciate your support very much! 💙'
  }
};

export default function Footer () {
  return (
    <footer className="flex flex-col w-full px-5 py-10 border-t border-fun-pink-darker z-5">
      <div className="w-full max-w-4xl m-auto grid grid-cols-1 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-left">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4">
            {footer.support.buymeacoffee !== '' && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/images/buy-me-a-coffee.png"
                    className="h-12 hover:opacity-80 opacity-100 transition-opacity"
                    alt="buy me a coffe"
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== '' && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/images/paypal.png"
                    className="h-12 hover:opacity-80 opacity-100 transition-opacity"
                    alt="paypay icon"
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs mt-2">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
