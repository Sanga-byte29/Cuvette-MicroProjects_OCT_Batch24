import { useState } from "react";
import styles from "./pocketnotes.module.css";
import img1 from "./images/image1.png";
import Sidebar from "../sidebar/Sidebar";
import NotesPanel from "../notespanel/NotesPanel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PocketNotes = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <Sidebar onSelectGroup={setSelectedGroup} />

      {/* Main Content */}
      <div className={styles.mainContent}>
        {selectedGroup ? (
          <NotesPanel group={selectedGroup} />
        ) : (
          <>
            <img src={img1} alt="Illustration" className={styles.image} />
            <h2 className={styles.heading}>Pocket Notes</h2>
            <p className={styles.description}>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
            <div className={styles.encryption}>🔒 end-to-end encrypted</div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PocketNotes;
