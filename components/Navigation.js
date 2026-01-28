import styles from '../styles/Navigation.module.css'

export default function Navigation({ progress, darkMode, toggleDarkMode }) {

  const handleThemeChange = (e) => {
    toggleDarkMode()
  }

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logo}>H</div>

        <div className={styles.icons}>
          <button className={styles.iconButton} aria-label="Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Gallery">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Video">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Camera">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12m-3.2 0a3.2 3.2 0 1 1 6.4 0a3.2 3.2 0 1 1 -6.4 0" />
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
          </button>
          <button className={styles.iconButton} aria-label="Edit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </button>
        </div>

        <div className={styles.rightGroup}>
          <div className={`${styles.links} ${styles.desktopLinks}`}>
            <a href="#" className={`${styles.button} ${styles.b2}`} data-text="Gallery">
              Gallery
            </a>
            <a href="#" className={`${styles.button} ${styles.b3}`} data-text="Support">
              Support
            </a>
          </div>

          <div className={styles.toggleSwitch}>
            <label className={styles.switchLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                id="theme-switch-checkbox"
                checked={darkMode}
                onChange={handleThemeChange}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={`${styles.links} ${styles.mobileLinks}`}>
          <a href="#" className={`${styles.button} ${styles.b2}`} data-text="Gallery">
            Gallery
          </a>
          <a href="#" className={`${styles.button} ${styles.b3}`} data-text="Support">
            Support
          </a>
        </div>
      </nav>

      {progress > 0 && (
        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </header>
  )
}

