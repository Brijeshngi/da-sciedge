
import { Box, Grid, Typography, Skeleton } from '@mui/material'
import GlassCard from './GlassCard.jsx'
import useSkeleton from '../hooks/useSkeleton'

const cards = [
  { title: 'Genomics', desc: 'Variant calling, single-cell, spatial omics, and population-scale analytics with reproducible workflows.' },
  { title: 'Proteomics', desc: 'MS-based identification, quantitation, and network analysis enabling target discovery and validation.' },
  { title: 'Neuroscience', desc: 'Multi-modal pipelines for imaging, electrophysiology, and behavior analytics with ML-assisted insights.' },
  { title: 'Clinical Trial Management', desc: 'Data capture, curation, real-world data integration and adaptive reporting.' },
]

export default function Solutions(){
  const loading = useSkeleton(900)
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Solutions</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>Purpose-built expertise for modern bioscience programs.</Typography>
      <Grid container spacing={3}>
        {cards.map((c, idx)=>(
          <Grid item xs={12} sm={6} key={idx}>
            <GlassCard>
              {loading ? (
                <>
                  <Skeleton variant="rounded" width="40%" height={24} />
                  <Skeleton variant="rounded" height={60} sx={{ mt: 1 }}/>
                </>
              ) : (
                <>
                  <Typography variant="h6">{c.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>{c.desc}</Typography>
                </>
              )}
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
