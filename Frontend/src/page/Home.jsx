const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-r from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 text-center max-w-3xl leading-tight">
        Welcome to <span className="text-green-600">Shortify</span> 🔗
      </h1>
      <p className="text-lg text-gray-700 mb-10 max-w-xl text-center">
        Create short and smart URLs that expire automatically. Secure, simple, and fast. Share links without worrying about clutter or expired access.
      </p>

      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
        alt="URL Shortening"
        className="w-40 h-40 md:w-56 md:h-56 mb-12"
      />

      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why use Shortify?
        </h2>
        <ul className="text-gray-600 list-disc list-inside space-y-2 text-left">
          <li><strong>Easy to use:</strong> Create short URLs in seconds with or without a custom shortcode.</li>
          <li><strong>Automatic expiry:</strong> Set how long your short URL remains valid, ensuring better control and security.</li>
          <li><strong>Track clicks:</strong> Monitor usage with click tracking to analyze traffic and performance.</li>
          <li><strong>User-friendly dashboard:</strong> Manage your links easily and see your URL list in one place.</li>
          <li><strong>Secure:</strong> Only registered users can create and manage their short URLs.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
