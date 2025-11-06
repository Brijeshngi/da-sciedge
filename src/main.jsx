
import React, { useMemo, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from './App.jsx'
import { getTheme } from './theme.js'
import ReactGA from 'react-ga4'

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXX';

function AnalyticsListener(){
  const location = useLocation();
  useEffect(()=>{
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
  return null;
}

function Root(){
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(()=>({ toggle: ()=> setMode(m => m === 'dark' ? 'light' : 'dark') }),[]);
  const theme = useMemo(()=>getTheme(mode), [mode]);

  useEffect(()=>{ ReactGA.initialize(GA_ID); }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AnalyticsListener />
        <App colorMode={colorMode} mode={mode} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><Root /></React.StrictMode>
)
