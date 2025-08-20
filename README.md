# Animated JavaScript Radar Chart

![Animated JavaScript Radar Chart](spiderAnimated-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

This example shows creation of a Radar Chart with animated transitions by using a suitably styled SpiderChart.

SpiderCharts can be styled to look like traditional Radar Charts by usage of SpiderWebModes - more specifically, SpiderWebMode.Circle.

```javascript
// Set web-mode of SpiderChart, affecting the shape of its background, webs and nibs.
spiderChart.setWebMode(SpiderWebMode.Circle)
```

Transitions can be set at regular intervals using setInterval like so:

```javascript
setInterval(() => {
    // This code will be called approximately every 100 milliseconds.
}, 100)
```


## API Links

* [Spider chart]
* [Spider web mode]
* [Spider series]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2025. All rights reserved.


[Spider chart]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/SpiderChart.html
[Spider web mode]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/enums/SpiderWebMode.html
[Spider series]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/SpiderSeries.html

