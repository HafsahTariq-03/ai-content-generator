import { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import HistorySection from '../components/HistorySection'
import InputPanel from '../components/InputPanel'
import GeneratedContent from '../components/GeneratedContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [generatedImages, setGeneratedImages] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [description, setDescription] = useState('')
  const [selectedModel, setSelectedModel] = useState('')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

 
  const handleGenerate = async (prompt, settings) => {
    setIsGenerating(true)
    setGenerationProgress(0)
    setDescription(prompt)
    setSelectedModel(settings?.model || '')

  
    const progressInterval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 10
      })
    }, 200)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, ...settings }),
      })
      const data = await response.json()
      setGeneratedImages(data.images)
      setGenerationProgress(100)
    } catch (error) {
      console.error('Generation error:', error)
    } finally {
      setIsGenerating(false)
      setTimeout(() => setGenerationProgress(0), 1000)
    }
  }

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen">
      <Head>
        <title>AI Content Generator</title>
        <meta name="description" content="Generate AI images and videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://unpkg.com/@splinetool/viewer@1.8.9/build/spline-viewer.js"
        strategy="lazyOnload"
        type="module"
      />

      <Navigation 
        progress={generationProgress} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className={styles.main}>
        <div className={styles.leftPanel}>
          <div className={styles.leftCard}>
            <HistorySection darkMode={darkMode} />
          </div>
          <div className={styles.leftCard}>
            <InputPanel onGenerate={handleGenerate} isGenerating={isGenerating} darkMode={darkMode} />
          </div>
        </div>

        <div className={styles.rightPanel}>
          <GeneratedContent 
            images={generatedImages} 
            description={description}
            isGenerating={isGenerating}
            model={selectedModel}
          />
        </div>
      </main>
    </div>
  )
}

