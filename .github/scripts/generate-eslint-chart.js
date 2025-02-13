const fs = require('fs')
const { createCanvas } = require('canvas')

const INPUT_FILE = 'eslint-report.json'
const OUTPUT_FILE = 'eslint-chart.png'

// Canvas settings
const WIDTH = 500
const HEIGHT = 300
const BAR_WIDTH = 40
const PADDING = 60

function getColorForIndex(index, totalBars) {
  const hue = (index / totalBars) * 360 // Hue from 0 to 360 degrees
  return `hsl(${hue}, 100%, 50%)` // HSL format
}

try {
  const report = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))
  const { errorCounts } = report
  const keys = Object.keys(errorCounts)
  const values = Object.values(errorCounts)
  const maxCount = Math.max(...values)

  // Create canvas
  const canvas = createCanvas(WIDTH, HEIGHT)
  const ctx = canvas.getContext('2d')

  // Background
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  // Draw bars
  keys.forEach((rule, i) => {
    const barHeight = (values[i] / maxCount) * (HEIGHT - 100)
    const x = PADDING + i * (BAR_WIDTH + 30)
    const y = HEIGHT - barHeight - 40

    ctx.fillStyle = getColorForIndex(i, keys.length)
    ctx.fillRect(x, y, BAR_WIDTH, barHeight)

    // Labels
    ctx.fillStyle = '#000'
    ctx.font = '14px Arial'
    ctx.fillText(values[i], x + 10, y - 5)
  })

  // Save the image
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(OUTPUT_FILE, buffer)
  console.log('✅ ESLint chart saved as', OUTPUT_FILE)
} catch (error) {
  console.error('Error generating ESLint chart:', error)
  process.exit(1)
}
