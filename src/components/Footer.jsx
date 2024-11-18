import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com/code-it-vro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashutoshshukla10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/Ashutosh_061205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <SiLeetcode /> {/* LeetCode icon */}
          </a>
          <a
            href="https://discord.gg/MbNWztKV" // Replace with your Discord invite link
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaDiscord />
          </a>
        </div>

        {/* Added text and refined layout */}
        <div className="text-center text-gray-400 mb-4">
          <p className="text-sm">Let's connect and build something amazing!</p>
        </div>

        <div className="text-center text-gray-400">
          <p className="text-xs">
            © {new Date().getFullYear()} Ashutosh Shukla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
