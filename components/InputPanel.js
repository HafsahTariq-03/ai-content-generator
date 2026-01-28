import { useState } from 'react'
import styles from '../styles/InputPanel.module.css'

export default function InputPanel({ onGenerate, isGenerating, darkMode }) {
  const [activeTab, setActiveTab] = useState('Image')
  const [prompt, setPrompt] = useState('')
  const [numImages, setNumImages] = useState('4')
  const [aspectRatio, setAspectRatio] = useState('1:1')
  const [model, setModel] = useState('Model: Name')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim()) {
      onGenerate(prompt, {
        type: activeTab.toLowerCase(),
        numImages: parseInt(numImages),
        aspectRatio,
        model,
      })
    }
  }

  return (
    <div className={styles.inputPanel}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'Image' ? styles.active : ''}`}
          onClick={() => setActiveTab('Image')}
        >
          Image
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'Video' ? styles.active : ''}`}
          onClick={() => setActiveTab('Video')}
        >
          Video
        </button>
      </div>

      {/* Input Field */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.textarea}
          placeholder="Describe you imaginations to be converted to piece of art..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={6}
        />

        {/* Generate Button */}
        <button
          type="submit"
          className={styles.generateButton}
          disabled={isGenerating || !prompt.trim()}
        >
          <span className={styles.fold}></span>
          <div className={styles.pointsWrapper}>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
            <i className={styles.point}></i>
          </div>
          <span className={styles.inner}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            >
              <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
          </svg>
          Generate
          </span>
        </button>
      </form>

      {/* Settings */}
      <div className={styles.settings}>
        <select
          className={styles.select}
          value={numImages}
          onChange={(e) => setNumImages(e.target.value)}
        >
          <option value="1">1 Image</option>
          <option value="2">2 Images</option>
          <option value="4">4 Images</option>
          <option value="8">8 Images</option>
        </select>

        <select
          className={styles.select}
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
        >
          <option value="1:1">1:1</option>
          <option value="16:9">16:9</option>
          <option value="9:16">9:16</option>
          <option value="4:3">4:3</option>
        </select>

        <select
          className={styles.select}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="Model: Name">Model: Name</option>
          <option value="Model: Advanced">Model: Advanced</option>
          <option value="Model: Pro">Model: Pro</option>
        </select>
      </div>

      {/* Advanced Options */}
      <div className={styles.advanced}>
        <details className={styles.details}>
          <summary className={styles.summary}>
            Advance
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </summary>
          <div className={styles.advancedContent}>
            <p>Advanced settings coming soon...</p>
          </div>
        </details>

        <details className={styles.details}>
          <summary className={styles.summary}>
            Styles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </summary>
          <div className={styles.advancedContent}>
            <p>Style options coming soon...</p>
          </div>
        </details>
      </div>
    </div>
  )
}

