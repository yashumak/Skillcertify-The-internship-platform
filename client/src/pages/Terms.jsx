export default function Terms() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-6">
        Welcome to SkillCertify! By accessing or using our website and services,
        you agree to be bound by these Terms of Service. Please read them
        carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By using SkillCertify, you agree to comply with and be legally bound by
        these terms, whether or not you become a registered user.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. Use of the Platform
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>You must be at least 13 years old to use our services.</li>
        <li>
          You agree to provide accurate and complete information when
          registering or enrolling in courses.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account information.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Intellectual Property
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          All content on SkillCertify, including courses, videos, text,
          graphics, and logos, is the property of SkillCertify or its content
          creators.
        </li>
        <li>
          You may not reproduce, distribute, or create derivative works from our
          content without permission.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. User Conduct</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Do not use the platform for any unlawful purpose.</li>
        <li>Do not harass, abuse, or harm other users.</li>
        <li>
          Do not attempt to gain unauthorized access to the platform or its
          systems.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        5. Payments & Refunds
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          All payments for courses and certifications are non-transferable.
        </li>
        <li>
          Refunds are subject to our{" "}
          <a href="/refund" className="text-blue-600 underline">
            Refund Policy
          </a>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Certificates</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          Certificates are awarded upon successful completion of course
          requirements and payment of applicable fees.
        </li>
        <li>
          SkillCertify reserves the right to revoke certificates in case of
          academic dishonesty or violation of terms.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        7. Modifications to Terms
      </h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms at any time.
        Changes will be posted on this page. Continued use of the platform after
        changes constitutes acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        8. Disclaimer & Limitation of Liability
      </h2>
      <p className="mb-4">
        SkillCertify provides content for educational purposes only. We do not
        guarantee job placement or specific outcomes. We are not liable for any
        damages arising from your use of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">9. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:support@skillcertify.com"
          className="text-blue-600 underline"
        >
          support@skillcertify.com
        </a>
        .
      </p>
    </div>
  );
}
