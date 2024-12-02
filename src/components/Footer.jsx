const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          <a
            href="mailto:your-email@example.com"
            className="text-blue-400 hover:underline"
          >
            your-email@example.com
          </a>
        </p>
        <p className="text-sm mt-2">
          <a
            href="tel:+1234567890"
            className="text-blue-400 hover:underline"
          >
            (123) 456-7890
          </a>
        </p>
        <p className="text-sm mt-2">
          <a
            href="/path-to-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            My Resume
          </a>
        </p>
        <p className="text-sm mt-6">&copy; {new Date().getFullYear()} yourwebsite.com</p>
      </div>
    </footer>
  );
};

export default Footer;
