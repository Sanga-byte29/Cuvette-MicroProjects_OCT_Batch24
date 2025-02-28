import styles from "./group.module.css";
import PropTypes from "prop-types";

const Group = ({ groups, onSelectGroup }) => {
  return (
    <div className={styles.contactList}>
      {groups.map((contact, index) => (
        <div
          key={index}
          className={styles.contactItem}
          onClick={() => onSelectGroup(contact)}
        >
          <div className={styles.contactIcon} style={{ backgroundColor: contact.color }}>
            {contact.initials}
          </div>
          <div className={styles.contactName}>{contact.name}</div>
        </div>
      ))}
    </div>
  );
};

Group.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      initials: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  onSelectGroup: PropTypes.func.isRequired,
};

export default Group;
