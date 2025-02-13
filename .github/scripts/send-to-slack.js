const axios = require('axios')

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const IMAGE_URL = process.env.IMAGE_URL

const slackMessage = {
  text: "🎉 Hey <@frontend> team! Big shoutout for your ongoing efforts in keeping our code clean! 🚀 Here’s the latest ESLint report for our project. Let's keep squashing those errors! 🔥",
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: "🎉 *Hey <@frontend> team!* Big shoutout for your ongoing efforts in keeping our code clean! 🚀\n\nHere’s the latest ESLint report for our project. Let's keep squashing those errors! 🔥",
      },
    },
    {
      type: 'image',
      image_url: IMAGE_URL,
      alt_text: 'ESLint Chart',
    },
  ],
}

;(async () => {
  try {
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
