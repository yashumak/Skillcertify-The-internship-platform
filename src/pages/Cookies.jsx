export default function Cookies() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-6">
        This Cookie Policy explains how SkillCertify uses cookies and similar
        technologies on our website. By using our platform, you consent to the
        use of cookies as described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device by your web browser.
        They help websites remember your preferences and enhance your browsing
        experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. How We Use Cookies
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>To remember your login status and preferences.</li>
        <li>To analyze site traffic and usage patterns.</li>
        <li>To enable certain features and improve our services.</li>
        <li>To deliver relevant content and advertisements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Types of Cookies We Use
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Essential Cookies:</strong> Required for the operation of our
          website (e.g., authentication).
        </li>
        <li>
          <strong>Performance Cookies:</strong> Help us understand how visitors
          interact with our site.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> Remember your preferences and
          settings.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> Used to deliver relevant ads and
          track ad performance.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Managing Cookies</h2>
      <p className="mb-4">
        You can control and delete cookies through your browser settings. Please
        note that disabling cookies may affect the functionality of our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        5. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact Us</h2>
      <p>
        If you have any questions about our Cookie Policy, please contact us at{" "}
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
