import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async () => {
    const f = new FormData();
    f.append("image", image);

    const res = await axios.post("/api/upload", f);
    setResult(res.data);
  };

  return (
    <div>
      <h1>Upload Motor</h1>
      <input type="file" onChange={e => setImage(e.target.files[0])}/>
      <button onClick={upload}>Process</button>

      {result && (
        <div>
          <h3>Estimasi Harga: Rp {result.estimatedPrice}</h3>
        </div>
      )}
    </div>
  );
}
