
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Chip, Skeleton } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import GlassCard from './GlassCard.jsx'
import useSkeleton from '../hooks/useSkeleton'

export default function Mission(){
  const loading = useSkeleton(800)
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Our Mission</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        We deliver end-to-end analytics — from raw data ingestion to insight delivery — combining rigorous science with production-grade AI/ML pipelines to reduce time-to-discovery and elevate research impact.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <GlassCard>
            <List>
              {[
                'Regulatory-grade pipelines: validated and auditable',
                'AI-first methodology for biomedical data',
                'Secure cloud-native, compliant infrastructure'
              ].map((t, i) => (
                <ListItem key={i}>
                  <ListItemIcon><CheckCircleRoundedIcon color="primary"/></ListItemIcon>
                  {loading ? <Skeleton variant="rounded" height={24} width="80%" /> : <ListItemText primary={t}/>}
                </ListItem>
              ))}
            </List>
          </GlassCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <GlassCard>
            {loading ? <Skeleton variant="rectangular" height={180}/> : (
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Trusted by research teams across biotech, hospitals, and universities.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {['Genomics','Proteomics','Neuroscience','Clinical Trials','Bioinformatics'].map((c)=>(
                    <Chip key={c} label={c} color="primary" variant="outlined"/>
                  ))}
                </Box>
              </Box>
            )}
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  )
}
