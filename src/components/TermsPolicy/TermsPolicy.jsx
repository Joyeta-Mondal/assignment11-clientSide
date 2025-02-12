import { useState } from "react";
import { motion } from "framer-motion";

const TermsPolicy = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 bg-purple-200 dark:bg-gray-800 shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Terms & Policy - BookWarts
      </h2>
      <div className="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Welcome to <strong>BookWarts</strong>. By registering for a library
          card or using our services, you agree to comply with the following
          terms and conditions.
        </p>

        <h3 className="text-xl font-semibold">1. Membership</h3>
        <p>
          - Library cards are issued to individuals who provide valid
          information.
          <br />- Each member is responsible for books borrowed under their
          account.
        </p>

        <h3 className="text-xl font-semibold">2. Borrowing Rules</h3>
        <p>
          - Books must be returned within the due date.
          <br />- Late returns may incur penalties or suspension of borrowing
          privileges.
        </p>

        <h3 className="text-xl font-semibold">3. Privacy Policy</h3>
        <p>
          - We respect your privacy and do not share your personal information
          with third parties.
          <br />- Your data is securely stored and used only for managing
          library services.
        </p>

        <h3 className="text-xl font-semibold">4. Code of Conduct</h3>
        <p>
          - Users must respect library resources and fellow members.
          <br />- Any damage or loss of books must be reported immediately.
        </p>
      </div>
    </motion.div>
  );
};

export default TermsPolicy;
