import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Projectscardmui = (props) => {
  const { data } = props;

  return (
    <Card sx={{ maxWidth: 320 }} className="project-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="185"
          image={data.imageurl}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.details}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.url}
            </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Projectscardmui;