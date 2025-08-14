import React from "react";

export default function Refund() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-6">
        At SkillCertify, we strive to provide the best learning experience.
        Please read our refund policy carefully before enrolling in any course
        or certification.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Eligibility for Refunds
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          Refund requests must be made within <strong>7 days</strong> of your
          purchase date.
        </li>
        <li>
          Refunds are only applicable if you have not accessed more than 20% of
          the course content or downloaded any certificate.
        </li>
        <li>
          No refunds will be issued after a certificate has been generated or if
          the course has been substantially completed.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. How to Request a Refund
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          To request a refund, please email us at{" "}
          <a
            href="mailto:support@skillcertify.com"
            className="text-blue-600 underline"
          >
            support@skillcertify.com
          </a>{" "}
          with your order details and reason for the refund.
        </li>
        <li>
          Our support team will review your request and respond within 3-5
          business days.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Non-Refundable Items
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          Fees for completed courses and issued certificates are non-refundable.
        </li>
        <li>
          Promotional or discounted purchases are not eligible for refunds.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        4. Processing Refunds
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          Approved refunds will be processed to your original payment method
          within 7-10 business days.
        </li>
        <li>
          You will receive a confirmation email once your refund has been
          processed.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Contact Us</h2>
      <p>
        If you have any questions about our refund policy, please contact us at{" "}
        <a
          href="mailto:support@skillcertify.com"
          className="text-blue-600 underline"
        >
          support@skillcertify.com
        </a>
      </p>
    </div>
  );
}
