const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-7">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xl">
          <a
            href="mailto:tthompson8416@outlook.com"
            className="text-white hover:underline"
          >
            My Email
          </a>
        </p>
        <p className="text-lg mt-2">
          <a
            href="tel:3238771527"
            className="text-white hover:underline"
          >
            (323) 877-1527
          </a>
        </p>
        <p className="text-xl mt-2">
          <a
            href="/tanesiacodes/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            My Resume
          </a>
        </p>
        <p className="text-md mt-6">&copy; {new Date().getFullYear()} https://tthompson8416.github.io/tanesiacodes/</p>
      </div>
    </footer>
  );
};

export default Footer;
