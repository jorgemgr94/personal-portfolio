import { FaRegFilePdf } from 'react-icons/fa';
import IconRounded from '@/components/IconRounded';
import { socialNetworks } from '@/data';

function SocialNetworks () {
  return (
    <>
      <section className="mb-4">
        {socialNetworks.map((socialNetwork, key) => (
          <a
            key={key}
            href={socialNetwork.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IconRounded icon={<socialNetwork.icon />} />
          </a>
        ))}
        <a
          href={'/resume'}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <IconRounded icon={<FaRegFilePdf />} />
        </a>
      </section>
    </>
  );
}

export default SocialNetworks;
