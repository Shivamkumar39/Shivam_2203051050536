// src/page/Home.jsx
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Shortify 🔗</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Create short and smart URLs that expire automatically. Secure, simple, and fast.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
        alt="URL Shortening"
        className="w-48 h-48"
      />
    </div>
  );
};

export default Home;
