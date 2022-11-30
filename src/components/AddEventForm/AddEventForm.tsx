import React from 'react';

import styles from './AddEventForm.module.css';

function AddEventForm ({ closeForm }: any) {

  return (
    <div className={styles.addEventContainer}>
      <div className={styles.infoContainer}>
        <h2>Add an Event</h2>
        <h3 className={styles.formHeading}>Event Title:</h3>
          <input className={styles.input} type='text' placeholder="Name of the Event..."/>
        <h3 className={styles.formHeading}>Start Time:</h3>
          <input className={styles.input} type='datetime-local' />
        <h3 className={styles.formHeading}>End Time:</h3>
          <input className={styles.input} type='datetime-local' />
        <h3 className={styles.formHeading}>Event Type:</h3>
          <select name="eventType" id="eventType" className={styles.select}>
            <option value="food">food</option>
            <option value="active">active</option>
            <option value="leisure">leisure</option>
            <option value="shopping">shopping</option>
            <option value="travel">travel</option>
            <option value="other">other</option>
          </select>
        <h3 className={styles.formHeading}>Event Info:</h3>
          <input className={styles.input} type='text' placeholder="What do we need to know..." />
        <div className={styles.buttonDiv}>
          <button className={styles.submitButton}>Submit</button>
          <button className={styles.cancelButton} onClick={closeForm}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddEventForm;