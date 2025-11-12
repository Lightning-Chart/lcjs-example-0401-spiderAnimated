/*
 * LightningChartJS example that showcases a Spider (Radar) Chart with animated changing of values.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, SpiderWebMode, Themes } = lcjs

// Create a circular spider chart and add a series to it.
const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .Spider({
        legend: { visible: false },
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Animated Radar Chart')
    .setTitleMargin({ top: 20, bottom: 40 })
    .setAxisInterval(100)
    // Configure spider to be circular (like a traditional Radar Chart).
    .setWebMode(SpiderWebMode.Circle)
const series = chart.addSeries()

// Set initial series values, creating axes.
const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E']
series.addPoints(
    { axis: categories[0], value: 100 },
    { axis: categories[1], value: 100 },
    { axis: categories[2], value: 100 },
    { axis: categories[3], value: 100 },
    { axis: categories[4], value: 100 },
)

// Setup randomization of series values at regular intervals.
const randomizePoints = () => {
    for (const category of categories) {
        const value = Math.random() * 100
        series.addPoints({ axis: category, value })
    }
}
// Randomize points every other second (2000 ms).
setInterval(randomizePoints, 2000)
