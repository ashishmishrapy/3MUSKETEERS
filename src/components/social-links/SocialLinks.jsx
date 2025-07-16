import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaApple,
  FaYoutube,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <ul className="flex flex-col space-y-7 text-white md:text-2xl">
      <li>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/artist/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
      </li>
      <li>
        <a
          href="https://music.apple.com/artist/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
