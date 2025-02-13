const axios = require('axios')
const fs = require('fs')

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const IMAGE_URL = process.env.IMAGE_URL
const INPUT_FILE = 'eslint-report.json'

const slackMessage = {
  text: '🚀 ESLint Report Update!',
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🚀 ESLint Report Update!',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '🎉 *Hey <@frontend> team!*',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Big shoutout for your ongoing efforts in keeping our code clean! 🧹',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: "Here’s the latest ESLint report for our project. Let's keep improving! 💪",
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'image',
      title: {
        type: 'plain_text',
        text: 'ESLint Error Chart',
      },
      image_url: IMAGE_URL,
      alt_text: 'ESLint Error Chart',
    },
  ],
}

;(async () => {
  try {
    // read the report from the file
    const report = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))
    const { errorCounts } = report

    // Add the error counts to the Slack message
    slackMessage.blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '🚨 *Top Errors*',
      },
    })

    Object.entries(errorCounts).forEach(([rule, count], i) => {
      slackMessage.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${i + 1}. *${rule}* - ${count} errors`,
        },
      })
    })

    const response = await axios.post(
      SLACK_WEBHOOK_URL,
      JSON.stringify(slackMessage),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (response.status === 200) {
      console.log('✅ ESLint chart sent to Slack!')
    } else {
      console.error(
        '❌ Slack returned an error:',
        response.status,
        response.data
      )
    }
  } catch (error) {
    console.error(
      'Error sending Slack message:',
      error.response ? error.response.data : error.message
    )
  }
})()
