const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} ALX Listing. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
