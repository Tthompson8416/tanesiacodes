const Footer = () => {
  return (
    <footer className="bg-custom-intro-bg text-custom-intro-text py-7 relative overflow-hidden pt-24">
      {/* Gradient overlay at the top of the footer */}
      <div 
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-custom-intro-bg to-custom-dark">
        {/* 'absolute' positions the gradient at the top of the footer */}
        {/* 'top-0 left-0' ensures it starts at the top-left corner */}
        {/* 'w-full h-32' makes it span the full width and 32px in height */}
        {/* 'bg-gradient-to-t' creates a gradient transitioning from bottom to top */}
        {/* 'from-custom-intro' uses the intro section background color */}
        {/* 'to-custom-dark' uses the dark background color */}
      </div>

      {/* Footer content with a higher z-index */}
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* 'relative' ensures this content is layered above the gradient */}
        {/* 'z-10' gives it a higher stacking order than the gradient */}

        <p className="text-xl">
          <a
            href="mailto:tthompson8416@outlook.com"
            className="hover:underline"
          >
            My Email
          </a>
        </p>

        <p className="text-lg mt-2">
          <a
            href="tel:3238771527"
            className="hover:underline"
          >
            (323) 877-1527
          </a>
        </p>

        <p className="text-xl mt-2">
          <a
            href="/tanesiacodes/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            My Resume
          </a>
        </p>

        <p className="text-md mt-6">
          &copy; {new Date().getFullYear()} https://tthompson8416.github.io/tanesiacodes/
        </p>
      </div>
    </footer>
  );
};

export default Footer;
