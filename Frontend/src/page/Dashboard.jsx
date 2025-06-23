import { useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [latest, setLatest] = useState(null);

  const createUrl = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/shorturls",
        {
          url,
          shortcode: code,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(res.data.message);
      setUrl("");
      setCode("");
      setLatest(res.data.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create short URL");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-14 p-6 space-y-10 bg-gray-50 rounded-lg shadow-lg">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">
          Create Your Short URL
        </h2>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the full URL here..."
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Optional: Enter custom shortcode"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          onClick={createUrl}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
        >
          Generate Short URL
        </button>
      </section>

      {latest && (
        <section className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md border border-green-300">
          <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
            🎉 Short URL Created Successfully!
          </h3>
          <div className="space-y-3 text-gray-800">
            <p>
              <span className="font-semibold">Original URL:</span>{" "}
              <a
                href={latest.originalUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {latest.originalUrl}
              </a>
            </p>
            <p>
              <span className="font-semibold">Short URL:</span>{" "}
              <a
                href={`http://localhost:8000/${latest.shortCode}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-700 underline font-medium hover:text-green-900"
              >
                http://localhost:8000/{latest.shortCode}
              </a>
            </p>
            <p className="text-sm text-green-800">
              Expires on:{" "}
              {new Date(latest.expiry).toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
