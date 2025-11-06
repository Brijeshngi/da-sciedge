
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightModeRounded'
import DarkModeIcon from '@mui/icons-material/DarkModeRounded'
import NavButton from './NavButton.jsx'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar({ onToggleTheme, mode='dark' }){
  const [open, setOpen] = useState(false)
  const links = [
    {label:'Home', to:'/'}, {label:'Solutions', to:'/solutions'},
    {label:'About', to:'/about'}, {label:'Contact', to:'/contact'},
  ]

  return (
    <AppBar position="sticky" color="transparent" elevation={0}
      sx={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
      <Toolbar sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>SciEdge Innovations</Typography>
        </Stack>

        {/* Desktop */}
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {links.map(l => <NavButton key={l.to} to={l.to} variant="text">{l.label}</NavButton>)}
          <NavButton to="/solutions" color="primary">Explore</NavButton>
          <NavButton to="/contact" color="secondary" variant="outlined">Request Demo</NavButton>
          <IconButton onClick={onToggleTheme} size="small" color="inherit" aria-label="toggle theme">
            {mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Stack>

        {/* Mobile */}
        <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={onToggleTheme} size="small" color="inherit" aria-label="toggle theme">
            {mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
          <IconButton onClick={()=>setOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
        </Stack>

        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
          <Box sx={{ width: 260, p: 1 }} role="presentation" onClick={()=>setOpen(false)}>
            <List>
              {links.map(l => (
                <ListItem key={l.to} disablePadding>
                  <ListItemButton component={RouterLink} to={l.to}><ListItemText primary={l.label}/></ListItemButton>
                </ListItem>
              ))}
              <ListItem disablePadding>
                <ListItemButton component={RouterLink} to="/solutions"><ListItemText primary="Explore"/></ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={RouterLink} to="/contact"><ListItemText primary="Request Demo"/></ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
