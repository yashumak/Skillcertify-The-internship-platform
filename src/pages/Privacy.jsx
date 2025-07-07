export default function Privacy() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        At SkillCertify, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and safeguard your
        information when you use our website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Personal Information:</strong> Name, email address, and other
          contact details you provide when registering or contacting us.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you use our
          website, such as pages visited, time spent, and device/browser
          information.
        </li>
        <li>
          <strong>Payment Information:</strong> When you make a purchase, we
          collect payment details through secure third-party payment processors.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>To provide and improve our courses and services.</li>
        <li>
          To communicate with you about your account, courses, and updates.
        </li>
        <li>To process payments and issue certificates.</li>
        <li>To respond to your inquiries and provide support.</li>
        <li>To analyze usage and improve our platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Sharing Your Information
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          We do not sell or rent your personal information to third parties.
        </li>
        <li>
          We may share information with trusted service providers who help us
          operate our platform (e.g., payment processors, email services), but
          only as necessary.
        </li>
        <li>
          We may disclose information if required by law or to protect our
          rights and users.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        4. Cookies & Tracking
      </h2>
      <p className="mb-4">
        We use cookies and similar technologies to enhance your experience,
        analyze usage, and deliver relevant content. You can manage cookie
        preferences in your browser settings. For more details, see our{" "}
        <a href="/cookies" className="text-blue-600 underline">
          Cookie Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your data.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          You can access, update, or delete your personal information by
          contacting us.
        </li>
        <li>You may unsubscribe from marketing emails at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
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
