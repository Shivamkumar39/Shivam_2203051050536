import { useState } from "react";
import api from "../api";

const Dashboard = () => {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [latest, setLatest] = useState(null); // ✅ For storing most recent URL

  const createUrl = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/shorturls",
        {
          url,
          shortcode: code
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert(res.data.message);
      setUrl("");
      setCode("");

      // ✅ Store only the latest URL
      setLatest(res.data.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create short URL");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Create Short URL</h2>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter full URL"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Optional shortcode"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={createUrl}
          className="w-full bg-blue-700 text-white py-2 rounded"
        >
          Generate
        </button>
      </div>

      {latest && (
        <div className="bg-green-100 p-4 rounded shadow space-y-2">
          <h3 className="text-lg font-semibold mb-2">Short URL Created 🎉</h3>
          <p>
            <strong>Original:</strong> {latest.originalUrl}
          </p>
          <p>
            <strong>Short:</strong>{" "}
            <a
              className="text-blue-600 underline"
              href={`http://localhost:8000/${latest.shortCode}`}
              target="_blank"
              rel="noreferrer"
            >
              http://localhost:8000/{latest.shortCode}
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Expires: {new Date(latest.expiry).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
