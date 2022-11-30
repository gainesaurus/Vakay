import React from 'react';

import styles from './AddEventForm.module.css';

function AddEventForm ({ closeForm, submitEvent }: any) {

  return (
    <div className={styles.addEventContainer}>
      <form className={styles.infoContainer} onSubmit={submitEvent}>
        <h2>Add an Event</h2>
        <h3 className={styles.formHeading}>Event Title:</h3>
          <input required className={styles.input} name='title' type='text' placeholder="Name of the Event..."/>
        <h3 className={styles.formHeading}>Start Time:</h3>
          <input required className={styles.input} name='startTime' type='datetime-local' />
        <h3 className={styles.formHeading}>End Time:</h3>
          <input required className={styles.input} name='endTime' type='datetime-local' />
        <h3 className={styles.formHeading}>Event Type:</h3>
          <select required name="eventType" id="eventType" className={styles.select}>
            <option value="other">other</option>
            <option value="food">food</option>
            <option value="active">active</option>
            <option value="leisure">leisure</option>
            <option value="shopping">shopping</option>
            <option value="travel">travel</option>
          </select>
        <h3 className={styles.formHeading}>Event Info:</h3>
          <input required className={styles.input} name='info' type='text' placeholder="What do we need to know..." />
        <div className={styles.buttonDiv}>
          <button className={styles.submitButton} type="submit">Submit</button>
          <button className={styles.cancelButton} onClick={closeForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddEventForm;