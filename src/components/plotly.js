import dynamic from 'next/dynamic'

export const Plotly = dynamic(import('react-plotly.js'), {
  ssr: false
})