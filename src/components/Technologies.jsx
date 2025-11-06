
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Skeleton } from '@mui/material'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded'
import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded'
import GlassCard from './GlassCard.jsx'
import useSkeleton from '../hooks/useSkeleton'

const sections = [
  { title: 'Artificial Intelligence', icon: <AutoAwesomeRoundedIcon />,
    points: [
      'Foundation models, embeddings, and retrieval systems tailored to biomedical domains.',
      'Multi-omics representation learning',
      'LLM-assisted protocol design'
    ]},
  { title: 'Machine Learning', icon: <ScienceRoundedIcon />,
    points: [
      'Classical and probabilistic ML for robust inference and interpretable decision support.',
      'Time-series and survival analysis',
      'Causal inference & uplift modeling'
    ]},
  { title: 'Cloud Data Pipelines', icon: <CloudQueueRoundedIcon />,
    points: [
      'Reproducible, versioned pipelines with automation (DAG, lineage, observability).',
      'Containerized workflows (DWL, Nextflow)',
      'HIPAA/GxP-aligned architecture'
    ]},
]

export default function Technologies(){
  const loading = useSkeleton(900)
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Technologies</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>From AI to cloud-native pipelines — built for scientific rigor and scale.</Typography>
      <Grid container spacing={3}>
        {sections.map((s, i)=>(
          <Grid item xs={12} md={4} key={i}>
            <GlassCard>
              {loading ? <><Skeleton variant="rounded" width="60%" height={24}/><Skeleton sx={{ mt:1 }} height={100}/></>
              : (<>
                <Typography variant="h6" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>{s.icon}{s.title}</Typography>
                <List dense sx={{ mt: 1 }}>
                  {s.points.map((p, idx)=>(
                    <ListItem key={idx}>
                      <ListItemIcon><AutoAwesomeRoundedIcon color="primary" fontSize="small" /></ListItemIcon>
                      <ListItemText primary={p}/>
                    </ListItem>
                  ))}
                </List>
              </>)}
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
