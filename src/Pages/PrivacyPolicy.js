import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="py-24 bg-[#F4C430]">
          <h2 className="permanent-marker-regular text-3xl sm:text-3xl lg:text-5xl font-bold text-center">Privacy Policy</h2>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Introduction</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            At Dayaram Sweets, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information when you interact with our website and services.
          </p>

          <h3 className="text-2xl font-bold mb-4">1. Information We Collect</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li><strong>Personal Information:</strong> <p className="playpen-sans-text indent-6">This includes your name, email address, phone number, and any other information you provide when placing an order or contacting us.</p></li>
            <li><strong>Payment Information:</strong> <p className="playpen-sans-text indent-6">When you make a purchase, we collect payment details such as credit card information through a secure third-party payment gateway.</p></li>
            <li><strong>Usage Data:</strong> <p className="playpen-sans-text indent-6">We collect information on how you interact with our website, such as IP addresses, browser type, pages visited, and time spent on the site.</p></li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">2. How We Use Your Information</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Process and fulfill your orders, including sending order confirmations and updates.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Improve our website and services based on your feedback and usage patterns.</li>
            <li>Send you promotional emails and offers (only if you opt-in).</li>
            <li>Comply with legal obligations and resolve disputes.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">3. How We Protect Your Information</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We use SSL encryption to protect your sensitive information during transactions and store your data in secure servers. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee its absolute security.
          </p>

          <h3 className="text-2xl font-bold mb-4">4. Sharing of Information</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties, except under the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>With trusted third-party service providers who assist us in operating our website, conducting business, or servicing you (e.g., payment processors), so long as they agree to keep your information confidential.</li>
            <li>To comply with the law or legal process, such as a court order or subpoena, or to enforce our terms and conditions.</li>
            <li>To protect the rights, property, or safety of Dayaram Sweets, our customers, or others.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Our website uses cookies to enhance your experience. Cookies are small files that are stored on your device that allow us to recognize your browser and remember certain information.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We use cookies to:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Remember items in your shopping cart.</li>
            <li>Understand and save your preferences for future visits.</li>
            <li>Track website traffic and interactions to offer better site experiences in the future.</li>
          </ul>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You can choose to disable cookies through your browser settings, but this may limit your ability to use some features of our website.
          </p>

          <h3 className="text-2xl font-bold mb-4">6. Third-Party Links</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our website may contain links to third-party websites. These third-party sites have separate and independent privacy policies, and we have no responsibility or liability for the content and activities of these linked sites. We encourage you to review their policies before providing any personal information.
          </p>

          <h3 className="text-2xl font-bold mb-4">7. Children's Privacy</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take steps to delete it as soon as possible.
          </p>

          <h3 className="text-2xl font-bold mb-4">8. Your Rights</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Access the personal information we hold about you.</li>
            <li>Request that we correct or update any inaccurate information.</li>
            <li>Request that we delete your personal information, subject to certain legal obligations.</li>
            <li>Opt-out of receiving marketing communications at any time.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We may update this privacy policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on this page, and the date of the last update will be indicated at the top of the policy.
          </p>

          <h3 className="text-2xl font-bold mb-4">10. Contact Us</h3>
          <p className="playpen-sans-text text-lg text-gray-700">
            If you have any questions about this privacy policy or how we handle your personal information, please contact us at:
          </p>
          <p className="playpen-sans-text text-lg text-gray-700">
            Dayaram Sweets<br />
            Email: info@dayaramsweets.com<br />
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
