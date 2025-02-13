module.exports = function (results) {
  const errorCounts = {}

  results.forEach((file) => {
    file.messages.forEach((message) => {
      if (message.severity === 2) {
        errorCounts[message.ruleId] = (errorCounts[message.ruleId] || 0) + 1
      }
    })
  })

  const report = {
    errorCounts,
    withLessThanThreshold: {}, // Reserved for future use
  }

  // Use `process.stdout.write` to avoid extra newlines
  process.stdout.write(JSON.stringify(report))
  // write new line
  process.stdout.write('\n')
}
