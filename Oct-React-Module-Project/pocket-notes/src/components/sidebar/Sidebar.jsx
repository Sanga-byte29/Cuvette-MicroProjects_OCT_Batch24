import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Group from "../groups/Group";
import styles from "./sidebar.module.css";
import GroupModal from "../modals/GroupModal";

const Sidebar = ({ onSelectGroup }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  // Load groups from localStorage
  useEffect(() => {
    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  // Function to add a new group
  const addGroup = (name, color) => {
    if (!name || !color) return;
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    const newGroups = [...groups, { initials, color, name }];
    setGroups(newGroups);
    localStorage.setItem("groups", JSON.stringify(newGroups));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Pocket Notes</h1>
        </div>

        {/* Groups List */}
        <Group groups={groups} onSelectGroup={onSelectGroup} />

        {/* Add Button */}
        <div className={styles.addButtonContainer}>
          <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>+</button>
        </div>
      </div>

      {/* Modal for Creating Groups */}
      <GroupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={addGroup} />
    </>
  );
};
Sidebar.propTypes = {
  onSelectGroup: PropTypes.func.isRequired,
};

export default Sidebar;
