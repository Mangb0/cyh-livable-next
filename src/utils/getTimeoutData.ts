export async function getTimeoutData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000, {
      creators: 8000,
      platformFeePercent: 3,
      uptimePercent: 99.9,
      paidCreators: '70M',
    })
  })
}
