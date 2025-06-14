import {
  FaCode,
  FaInstagram,
  FaMediumM,
  FaStackOverflow,
  FaTwitter
} from 'react-icons/fa';
import SectionTemplate from '@/components/SectionTemplate';
import Alink from '@/components/Alink';

interface SocialNetworkDefinition {
  icon: React.ReactNode;
  url: string;
  name: string;
}

// const enum SocialNetworks {
//  Twitter = 'Twitter'
// }

// const socialNetworksV2: Record<SocialNetworks, SocialNetworkDefinition> = {
//  Twitter: {
//  icon: React.createElement('<FaTwitter />'),
//    url: `https://twitter.com/jorgemgr94`,
//   name: `Twitter`
//  }
// };

// socialNetworksV2.Twitter.icon;

const socialNetworks: SocialNetworkDefinition[] = [
  {
    icon: <FaTwitter />,
    url: 'https://twitter.com/jorgemgr94',
    name: 'Twitter'
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/jorgemgr94/',
    name: 'Instagram'
  },
  {
    icon: <FaStackOverflow />,
    url: 'https://stackoverflow.com/users/5377188/jorge-garcia',
    name: 'Stack Overflow'
  },
  {
    icon: <FaMediumM />,
    url: 'https://medium.com/@jorgemgr94',
    name: 'Medium'
  },
  {
    icon: <FaCode />,
    url: 'https://dev.to/jorgemgr94',
    name: 'Dev.to'
  },
  {
    icon: <FaCode />,
    url: 'https://app.codesignal.com/profile/jorgemgr94',
    name: 'Codesignal'
  }
];

interface SocialNetworkLinkProps {
  socialNetwork: SocialNetworkDefinition;
}

function SocialNetworkLink ({ socialNetwork }: SocialNetworkLinkProps) {
  const { url, icon, name } = socialNetwork;
  return (
    <Alink url={url}>
      <span className="inline-flex items-center gap-3 m-2 text-blue-400 hover:text-blue-300 dark:text-white dark:hover:text-blue-400">
        {icon} {name}
      </span>
    </Alink>
  );
}

export default function Social () {
  return (
    <SectionTemplate id="social" flexDirection="flex-col">
      <div className="text-4xl uppercase font-bold mb-4 w-full dark:text-yellow-500">
        Social Media
      </div>
      <section className="flex w-full justify-evenly flex-wrap">
        {socialNetworks.map((socialNetwork, key) => (
          <SocialNetworkLink socialNetwork={socialNetwork} key={key} />
        ))}
      </section>
    </SectionTemplate>
  );
}
