import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="py-24 bg-[#F4C430]">
          <h2 className="permanent-marker-regular text-3xl sm:text-3xl lg:text-5xl font-bold text-center">Terms and Conditions</h2>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Introduction</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Welcome to Dayaram Sweets. These Terms and Conditions govern your use of our website and services. By using this website, you agree to these terms and conditions in full. If you do not agree with these terms, you must not use this website.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Our website provides access to information, products, and services, and is intended for customers who wish to browse, purchase, and enjoy our offerings. Please ensure that you read the terms carefully as they contain important details regarding your rights and obligations as a customer.
          </p>

          <h3 className="text-2xl font-bold mb-4">1. License to Use</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Unless otherwise specified, Dayaram Sweets and/or its licensors own the intellectual property rights in the website and the material on the website. Subject to the license below, all these intellectual property rights are reserved.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You must not:
            <ul className="list-disc list-inside mb-6">
              <li>Republish material from this website (including republication on another website).</li>
              <li>Sell, rent, or sub-license material from the website.</li>
              <li>Show any material from the website in public.</li>
              <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for commercial purposes.</li>
              <li>Edit or otherwise modify any material on the website.</li>
              <li>Redistribute material from this website, except for content specifically and expressly made available for redistribution.</li>
            </ul>
          </p>

          <h3 className="text-2xl font-bold mb-4">2. Restrictions</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You are specifically restricted from the following:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Using this website in any way that is or may be damaging to the website or its functionality.</li>
            <li>Using this website in any way that impacts user access to the website.</li>
            <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
            <li>Using this website to engage in any advertising or marketing without proper authorization.</li>
          </ul>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Violation of these restrictions may result in termination of your access to the website and legal action being taken against you.
          </p>

          <h3 className="text-2xl font-bold mb-4">3. Order Placement and Cancellation</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            By placing an order through our website, you make an offer to purchase the products in accordance with these terms and conditions. Once an order is placed, you will receive a confirmation email. However, this does not mean your order has been accepted.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We reserve the right to cancel any order for any reason, including but not limited to: stock unavailability, pricing errors, or suspicion of fraudulent activity. In the event of cancellation, any payment made will be refunded in full.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Cancellation by the customer may be possible within a limited time period after placing the order, provided the order has not been dispatched. Once dispatched, cancellation will not be permitted, and the order will be processed for delivery.
          </p>

          <h3 className="text-2xl font-bold mb-4">4. Product Information and Availability</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We make every effort to ensure that the information on our website, including product descriptions and prices, is accurate. However, we do not guarantee that product descriptions, photographs, or other content on the site are error-free. There may be occasions where certain products are unavailable, either temporarily or permanently.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We reserve the right to modify or discontinue products at any time without prior notice. Any changes will not affect orders that have already been processed.
          </p>

          <h3 className="text-2xl font-bold mb-4">5. Pricing and Payment</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            All prices listed on our website are in Indian Rupees (INR) and are inclusive of applicable taxes, unless stated otherwise. We make every effort to ensure the accuracy of pricing; however, we reserve the right to correct any errors that may occur.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Payment must be made in full at the time of order using the available payment options on the website. We reserve the right to decline or cancel any order if payment is not received, or if we suspect fraud or unauthorized activity.
          </p>

          <h3 className="text-2xl font-bold mb-4">6. Governing Law</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            These terms and conditions are governed by the laws of India. Any disputes arising from the use of our website or services will be subject to the exclusive jurisdiction of the courts of Visakhapatnam.
          </p>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            If any provision of these terms and conditions is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions.
          </p>

          <h3 className="text-2xl font-bold mb-4">7. Changes to the Terms and Conditions</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We reserve the right to update or modify these terms and conditions at any time without prior notice. Any changes will take effect immediately upon posting on the website. Continued use of the website following the posting of revised terms signifies your acceptance of the changes.
          </p>

          <h3 className="text-2xl font-bold mb-4">8. Contact Information</h3>
          <p className="playpen-sans-text text-lg text-gray-700">
            For any questions or concerns regarding these terms, feel free to contact us at:
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

export default TermsAndConditions;
