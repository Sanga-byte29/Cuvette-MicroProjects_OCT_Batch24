import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./modal.module.css";

const GroupModal = ({ isOpen, onClose, onCreate }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!isOpen) return null; // Hide modal when not open

  const colors = ["#a47de8", "#ff80d5", "#39d2fe", "#eb8a61", "#007bff", "#6088ff"];

  const handleCreate = () => {
    if (!groupName || !selectedColor) return;
    
    // Create new group
    onCreate(groupName, selectedColor);

    // Reset input fields
    setGroupName("");
    setSelectedColor("");

    // Close modal after creation
    onClose();

     // Show toast notification
     toast.success("Group Added Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.heading}>Create New Group</h2>

        {/* Group Name Input */}
        <label className={styles.label}>Group Name</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

        {/* Color Selection */}
        <label className={styles.label}>Choose Colour</label>
        <div className={styles.colorContainer}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`${styles.colorCircle} ${selectedColor === color ? styles.selected : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.closeButton} onClick={onClose}>Close</button>
          <button
            className={styles.createButton}
            onClick={handleCreate}
            disabled={!groupName || !selectedColor}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

GroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default GroupModal;
