import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductsCard({ img, title, rtl, children }) {
  return (
    <Card sx={{ maxWidth: 360, background: 'var(--blue)', padding: '10px', color: 'white', borderRadius: '13px', marginBottom: '30px', cursor: 'default' }}>
      <CardActionArea>
        <CardMedia

          component="img"
          height="360"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" dir={rtl ? 'rtl' : 'ltr'}>
            {title}
          </Typography>
          <Typography variant="body2" color="white" dir={rtl ? 'rtl' : 'ltr'}>
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
