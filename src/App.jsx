/**
 * Root component: owns the top-level application state.
 *
 * Responsibilities:
 *  - hold the list of calorie records
 *  - open/close the "Track food" modal
 *  - turn a submitted form payload into a complete record and prepend it
 *
 * Layout: modal (edit form) + date-filtered record listing + open button.
 */
import { useState } from 'react';
import ListingSection from './components/calorieRecordsSection/ListingSection';
import CaloriesRecordEdit from './components/edit/CaloriesRecordEdit';
import Modal from "react-modal";
import styles from "./App.module.css";
import { getDateFromString } from './utils';

/**
 * Seed data so the list isn't empty on first load.
 * Each record: { id, date, meal, content, calories }
 * (negative calories are treated as invalid by the form's error styling)
 */
const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2023, 2, 1),
    meal: "Breakfast",
    content: "Eggs",
    calories: -340,
  },
  {
    id: 2,
    date: new Date(2023, 2, 2),
    meal: "Lunch",
    content: "Chicken",
    calories: 600,
  },
  {
    id: 3,
    date: new Date(2023, 2, 3),
    meal: "Dinner",
    content: "Cheese",
    calories: 200,
  },
  {
    id: 4,
    date: new Date(2023, 2, 4),
    meal: "Snacks",
    content: "Chocolate",
    calories: 500,
  },
]

function App() {
  // All records, newest first (new records are prepended in onFormSubmitHandler).
  const [records, setRecords] = useState(INITIAL_RECORDS);
  // Monotonic id counter — avoids id clashes when records are added.
  const [nextId, setNextId] = useState(INITIAL_RECORDS.length + 1);
  // Controls visibility of the react-modal edit form.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inline style object passed to <Modal>; react-modal applies `content` to
  // the dialog box itself and `overlay` to the dimmed backdrop.
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: 'var(--them-border-radius-smooth)',
      padding: '0',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  /**
   * Called by CaloriesRecordEdit when the form is submitted.
   * The form supplies `date` as a string, so we normalize it to a Date and
   * attach the next id before storing it.
   */
  const onFormSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: getDateFromString(record.date),
      id: nextId,
    }
    setNextId(lastUsedId => lastUsedId + 1)
    // Functional update: prepend using the latest state, not a stale copy.
    setRecords(prevRecords => [formattedRecord, ...prevRecords]);
    handleCloseModal();
  };

  return (
      <div className="App">
        <h1 className={styles.title}>Calorie Tracker</h1>
        {/* Edit form hosted in a modal; closing (X / Esc / Cancel) all go
            through handleCloseModal, which lives here in App. */}
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel='Modal' style={modalStyles}>
          <CaloriesRecordEdit onFormSubmit={onFormSubmitHandler} onCancel={handleCloseModal} />
        </Modal>
        {/* Listing filters `allRecords` down to the selected day. */}
        <ListingSection allRecords={records}/>
        <button onClick={handleOpenModal} className={styles["open-modal-btn"]}>Track food</button>
      </div>
  );
}

export default App
