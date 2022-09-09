import { useState } from "react";
import "./App.css";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadImg from "./comps/UploadImg";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadImg />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
