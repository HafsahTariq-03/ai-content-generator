import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/GeneratedContent.module.css'

export default function GeneratedContent({ images, description, isGenerating, model }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const modelLabel = (model || '').replace(/^model:\s*/i, '')

  return (
    <div className={styles.container}>
      {isClient && images.length === 0 && !isGenerating && (
        <div className={styles.splineContainer}>
          <spline-viewer 
            url="https://prod.spline.design/x0Rj1d1dTKQ-KNZF/scene.splinecode"
            className={styles.splineViewer}
          ></spline-viewer>
        </div>
      )}

      {isGenerating && images.length === 0 ? (
        <div className={styles.loading}>
          <div className={styles.loader} aria-label="Loading">
            <svg
              id="pegtopone"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <defs>
                <filter id="shine-one">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
                <mask id="mask-one">
                  <path
                    d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                    fill="white"
                  />
                </mask>
                <radialGradient
                  id="gradient-1-one"
                  cx="50"
                  cy="66"
                  fx="50"
                  fy="66"
                  r="30"
                  gradientTransform="translate(0 35) scale(1 0.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="black" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient-2-one"
                  cx="55"
                  cy="20"
                  fx="55"
                  fy="20"
                  r="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient-3-one"
                  cx="85"
                  cy="50"
                  fx="85"
                  fy="50"
                  xlinkHref="#gradient-2-one"
                />
                <radialGradient
                  id="gradient-4-one"
                  cx="50"
                  cy="58"
                  fx="50"
                  fy="58"
                  r="60"
                  gradientTransform="translate(0 47) scale(1 0.2)"
                  xlinkHref="#gradient-3-one"
                />
                <linearGradient
                  id="gradient-5-one"
                  x1="50"
                  y1="90"
                  x2="50"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                  <stop offset="40%" stopColor="black" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="currentColor"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-1-one)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="none"
                  stroke="white"
                  opacity="0.3"
                  strokeWidth="3"
                  filter="url(#shine-one)"
                  mask="url(#mask-one)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-2-one)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-3-one)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-4-one)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-5-one)"
                />
              </g>
            </svg>

            <svg
              id="pegtoptwo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <defs>
                <filter id="shine-two">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
                <mask id="mask-two">
                  <path
                    d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                    fill="white"
                  />
                </mask>
                <radialGradient
                  id="gradient-1-two"
                  cx="50"
                  cy="66"
                  fx="50"
                  fy="66"
                  r="30"
                  gradientTransform="translate(0 35) scale(1 0.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="black" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient-2-two"
                  cx="55"
                  cy="20"
                  fx="55"
                  fy="20"
                  r="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient-3-two"
                  cx="85"
                  cy="50"
                  fx="85"
                  fy="50"
                  xlinkHref="#gradient-2-two"
                />
                <radialGradient
                  id="gradient-4-two"
                  cx="50"
                  cy="58"
                  fx="50"
                  fy="58"
                  r="60"
                  gradientTransform="translate(0 47) scale(1 0.2)"
                  xlinkHref="#gradient-3-two"
                />
                <linearGradient
                  id="gradient-5-two"
                  x1="50"
                  y1="90"
                  x2="50"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                  <stop offset="40%" stopColor="black" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="currentColor"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-1-two)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="none"
                  stroke="white"
                  opacity="0.3"
                  strokeWidth="3"
                  filter="url(#shine-two)"
                  mask="url(#mask-two)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-2-two)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-3-two)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-4-two)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-5-two)"
                />
              </g>
            </svg>

            <svg
              id="pegtopthree"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <defs>
                <filter id="shine-three">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
                <mask id="mask-three">
                  <path
                    d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                    fill="white"
                  />
                </mask>
                <radialGradient
                  id="gradient-1-three"
                  cx="50"
                  cy="66"
                  fx="50"
                  fy="66"
                  r="30"
                  gradientTransform="translate(0 35) scale(1 0.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="black" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="black" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient-2-three"
                  cx="55"
                  cy="20"
                  fx="55"
                  fy="20"
                  r="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient-3-three"
                  cx="85"
                  cy="50"
                  fx="85"
                  fy="50"
                  xlinkHref="#gradient-2-three"
                />
                <radialGradient
                  id="gradient-4-three"
                  cx="50"
                  cy="58"
                  fx="50"
                  fy="58"
                  r="60"
                  gradientTransform="translate(0 47) scale(1 0.2)"
                  xlinkHref="#gradient-3-three"
                />
                <linearGradient
                  id="gradient-5-three"
                  x1="50"
                  y1="90"
                  x2="50"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" stopOpacity="0.2" />
                  <stop offset="40%" stopColor="black" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="currentColor"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-1-three)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="none"
                  stroke="white"
                  opacity="0.3"
                  strokeWidth="3"
                  filter="url(#shine-three)"
                  mask="url(#mask-three)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-2-three)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-3-three)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-4-three)"
                />
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="url(#gradient-5-three)"
                />
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <>
      <div className={styles.grid}>
        {images.map((image, index) => (
              <div 
                key={index} 
                className={styles.imageCard}
                style={{ '--index': index }}
              >
            <Image
              src={image.url}
              alt={image.alt || `Generated image ${index + 1}`}
                  width={400}
                  height={400}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {description && (
        <div className={styles.descriptionBox}>
          <p className={styles.descriptionText}>{description}</p>
          <button className={styles.modelButton} title={modelLabel || 'Model'}>
            {modelLabel || 'Model'}
          </button>
        </div>
          )}
        </>
      )}
    </div>
  )
}

