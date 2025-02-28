
const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import styles from "./notespanel.module.css";
// import { FaPaperPlane } from "react-icons/fa";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const NotesPanel = ({ group }) => {
//   const [inputText, setInputText] = useState("");
//   const [notes, setNotes] = useState([]);

//   // Load group-specific notes from localStorage whenever the group changes
//   useEffect(() => {
//     const storedNotes = localStorage.getItem(`notes_${group.name}`);
//     setNotes(storedNotes ? JSON.parse(storedNotes) : []);
//     setInputText(""); // Reset input field when group changes
//   }, [group]);

//   // Function to format timestamp as "28 Feb 2025"
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   // Function to add new note
//   const handleSend = () => {
//     if (inputText.trim() === "") return;

//     const newNotes = [
//       ...notes,
//       { text: inputText, timestamp: formatDate(new Date()) },
//     ];

//     setNotes(newNotes);
//     localStorage.setItem(`notes_${group.name}`, JSON.stringify(newNotes));
//     setInputText(""); // Clear input

//     // Show toast notification
//     toast.success("Note Added Successfully!", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   return (
//     <div className={styles.notesPanel}>
//       {/* Header */}
//       <div className={styles.header} style={{ backgroundColor: group.color }}>
//         <div className={styles.contactIcon} style={{ backgroundColor: group.color }}>
//           {group.initials}
//         </div>
//         <h2 className={styles.groupName}>{group.name}</h2>
//       </div>

//       {/* Notes Display */}
//       <div className={styles.notesContainer}>
//         {notes.length > 0 ? (
//           notes.map((note, index) => (
//             <div key={index} className={styles.noteBox} style={{ textAlign: "left" }}>
//               <p className={styles.noteText}>{note.text}</p>
//               <span className={styles.timestamp}>{note.timestamp}</span>
//             </div>
//           ))
//         ) : (
//           <p className={styles.emptyMessage}>No notes yet. Start writing...</p>
//         )}
//       </div>

//       {/* Input Field */}
//       <div className={styles.inputContainer}>
//         <input
//           type="text"
//           className={styles.inputBox}
//           placeholder="Enter your text here..."
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//         <button className={styles.sendButton} onClick={handleSend}>
//           <FaPaperPlane className={styles.sendIcon} />
//         </button>
//       </div>
//     </div>
//   );
// };

// NotesPanel.propTypes = {
//   group: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     initials: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default NotesPanel;
