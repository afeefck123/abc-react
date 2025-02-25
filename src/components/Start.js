import React, { useState } from 'react';
import styles from '../styles/Start.module.css';
import { X } from 'lucide-react';

const Start = ({ onClose }) => {
  const [budget, setBudget] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose(); // Close modal after submission
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1>Order</h1>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        {/* Rest of the form code remains the same */}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Your name *"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Company"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email *"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.budgetSection}>
            <label>Estimate budget *</label>
            <div className={styles.budgetOptions}>
              <button
                type="button"
                className={`${styles.budgetButton} ${budget === '20k' ? styles.active : ''}`}
                onClick={() => setBudget('20k')}
              >
                $20k
              </button>
              <button
                type="button"
                className={`${styles.budgetButton} ${budget === '50k' ? styles.active : ''}`}
                onClick={() => setBudget('50k')}
              >
                $50k
              </button>
              <button
                type="button"
                className={`${styles.budgetButton} ${budget === '100k' ? styles.active : ''}`}
                onClick={() => setBudget('100k')}
              >
                $100k+
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              placeholder="Message"
              className={styles.textarea}
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            send
            <span className={styles.arrow}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;