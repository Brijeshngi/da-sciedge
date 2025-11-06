
import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Skeleton } from '@mui/material'
import LabPanelIcon from '@mui/icons-material/PrecisionManufacturingRounded'
import ShieldIcon from '@mui/icons-material/ShieldRounded'
import GlassCard from './GlassCard.jsx'
import useSkeleton from '../hooks/useSkeleton'

export default function ResearchSupport(){
  const loading = useSkeleton(800)
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Academic Research Support</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>Tools, training, and services tailored for PIs, labs, and core facilities.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <GlassCard>
            {loading ? <Skeleton variant="rectangular" height={160}/> : (
              <>
                <Typography variant="h6" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}><LabPanelIcon/>For Labs & Core Facilities</Typography>
                <List dense>
                  {['Reusable workflows and notebooks','Training for students and staff','Data management and FAIR compliance'].map((t)=>(
                    <ListItem key={t}>
                      <ListItemIcon><ShieldIcon color="primary"/></ListItemIcon>
                      <ListItemText primary={t}/>
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained">Request campus engagement</Button>
              </>
            )}
          </GlassCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <GlassCard>
            {loading ? <Skeleton variant="rectangular" height={160}/> : (
              <>
                <Typography variant="h6">For PIs & Researchers</Typography>
                <List dense>
                  {['Grant collaboration & letters of support','Study design and power analysis','Secure data hosting and sharing'].map((t)=>(
                    <ListItem key={t}>
                      <ListItemIcon><ShieldIcon color="primary"/></ListItemIcon>
                      <ListItemText primary={t}/>
                    </ListItem>
                  ))}
                </List>
                <Button variant="outlined">Discuss a project</Button>
              </>
            )}
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  )
}
