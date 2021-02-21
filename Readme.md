# Get started

## 1. Install

### 1.1. Install dependancies

```shell
yarn
```

### 1.2. Install Netlify-cli

It will be necessary to launch netlify dev server.

```shell
npm install netlify-cli -g
```

### 1.3. Launch Netlify dev server

```shell
netlify dev
```

> Netlify dev server is necessary because API to collect weather data are managed through serverless functions in Netlify.

> Be sure to be logged-in to Netlify and have a link to a Netlify project (command `netlify link`)

## 2. Set API keys

Paste your API keys in the file `.env.example` and rename it `.env`.

The following API are used in this web application :

- **Open Weather Map** : weather icon and description, temperature | [API Documentation](https://openweathermap.org/api/one-call-api)
- **Tides** : timetable for tides, not to use for navigational purpose | [API Documentation](https://rapidapi.com/apihood/api/tides/endpoints)
- **StormGlass** : marine weather (wind, sea temperature, wave height) | [API Documentation](https://docs.stormglass.io/#/weather)

> Information about number of requests included in free plans :
>
> - API OpenWeatherMap : 60 calls/minute, 1.000.000 calls/month
> - API Tides : 100 calls/month
> - API StormGlass : 50 calls/day

### Demo mode

If you do not have API keys or if you reached the number of requests included in free plan, you can use the project in a demo mode with sample data instead of API data.

To activate demo mode, set `true` to state `displaySampleData` in the following file : `src/reducers/settingsReducer`.

### When deploying on Netlify

Set your API keys as environnement variables in Netlify UI.
