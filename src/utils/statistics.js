const report = (category, action, opt_label) => {
  if (window._hmt) {
    console.log(`%c statistics event: ${category}, ${action}, ${opt_label}`,'background:#343639;color:#bada55; padding: 0 10px')
    window._hmt.push(['_trackEvent', category, action, opt_label])
  }
}
export default report