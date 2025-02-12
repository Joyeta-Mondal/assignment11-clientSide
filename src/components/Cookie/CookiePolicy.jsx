import { useState } from "react";
import { motion } from "framer-motion";
import CookieImg from "../../assets/cookie-policy.jpeg";

const CookiePolicy = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center min-h-screen p-6"
      style={{
        backgroundImage: `url(${CookieImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay for Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-3xl p-8 bg-white/50 dark:bg-gray-800/90 shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Cookie Policy - 𝙱𝚘𝚘𝚔𝚆𝚊𝚛𝚝𝚜
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            This Cookie Policy explains how <strong>BookWarts</strong> uses
            cookies and similar technologies to enhance your browsing
            experience.
          </p>

          <h3 className="text-xl font-semibold">1. What Are Cookies?</h3>
          <p>
            - Cookies are small text files stored on your device to improve
            functionality and personalization.
            <br />- They help us analyze usage patterns and enhance security.
          </p>

          <h3 className="text-xl font-semibold">2. How We Use Cookies</h3>
          <p>
            - We use cookies to remember your preferences and login details.
            <br />- They assist in providing a seamless browsing experience.
          </p>

          <h3 className="text-xl font-semibold">3. Managing Cookies</h3>
          <p>
            - You can modify your cookie settings in your browser at any time.
            <br />- Disabling cookies may affect the functionality of our
            website.
          </p>

          <h3 className="text-xl font-semibold">4. Third-Party Cookies</h3>
          <p>
            - We may use third-party services that set their own cookies.
            <br />- These cookies help analyze traffic and improve our services.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CookiePolicy;
