import { useEffect, useState } from "react";
import api from "../api";

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/shorturls", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUrls(res.data.urls || []);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch URLs");
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">📋 Your Shortened URLs</h2>
      {urls.length === 0 ? (
        <p className="text-gray-500">No URLs created yet.</p>
      ) : (
        <div className="space-y-4">
          {urls.map((item, i) => (
            <div key={i} className="border-b pb-3">
              <p><strong>Original:</strong> {item.originalUrl}</p>
              <p>
                <strong>Short:</strong>{" "}
                <a
                  className="text-blue-600 underline"
                  href={`http://localhost:8000/${item.shortCode}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  http://localhost:8000/{item.shortCode}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Expires: {new Date(item.expiry).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UrlList;
