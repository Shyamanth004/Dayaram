import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ReturnExchangePolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="py-24 bg-[#F4C430]">
          <h2 className="permanent-marker-regular text-3xl sm:text-3xl lg:text-5xl font-bold text-center">Return and Exchange Policy</h2>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Introduction</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            At Dayaram Sweets, customer satisfaction is our top priority. We understand that sometimes you may need to return or exchange an item. Please read our return and exchange policy carefully to understand the conditions and procedures.
          </p>

          <h3 className="text-2xl font-bold mb-4">1. Eligibility for Returns and Exchanges</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You may return or exchange items under the following conditions:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>The item must be unused and in the same condition that you received it.</li>
            <li>The item must be in its original packaging with all tags attached.</li>
            <li>For perishable items, returns must be initiated within 24 hours of purchase.</li>
            <li>Proof of purchase (receipt or order confirmation) is required.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">2. Non-Returnable Items</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Certain items cannot be returned or exchanged, including:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Custom or personalized orders.</li>
            <li>Opened or consumed food items.</li>
            <li>Gift cards.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">3. How to Initiate a Return or Exchange</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            To initiate a return or exchange, please follow these steps:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Contact our customer service team at <strong>info@dayaramsweets.com</strong> or call us at <strong>+91-XXXXXXXXXX</strong> within 24 hours of receiving your order.</li>
            <li>Provide your order number, item(s) you wish to return or exchange, and reason for the return/exchange.</li>
            <li>Our team will provide you with instructions on how to return your item.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">4. Refunds</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.
          </p>

          <h3 className="text-2xl font-bold mb-4">5. Exchanges</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            If you need to exchange an item for the same item in a different size or flavor, please contact us at <strong>info@dayaramsweets.com</strong> for assistance. We will guide you through the exchange process.
          </p>

          <h3 className="text-2xl font-bold mb-4">6. Shipping Costs</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>

          <h3 className="text-2xl font-bold mb-4">7. Changes to This Policy</h3>
          <p className="playpen-sans-text text-lg text-gray-700 mb-6">
            We may update our return and exchange policy from time to time. Any changes will be posted on this page, and the date of the last update will be indicated at the top of the policy.
          </p>

          <h3 className="text-2xl font-bold mb-4">8. Contact Us</h3>
          <p className="playpen-sans-text text-lg text-gray-700">
            If you have any questions regarding this policy or the process, please contact us:
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

export default ReturnExchangePolicy;
