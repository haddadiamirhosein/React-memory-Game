
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


interface Props{
  icon:string;
  isFlipped:boolean;
  onHandleClick : () => void;
}

function CardGame({icon , isFlipped , onHandleClick}:Props) {
  return (
    <Card>
          <CardActionArea
            onClick={onHandleClick}
            data-active={ undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {isFlipped ? icon : "❓"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "for later"
              </Typography>
            </CardContent>
          </CardActionArea>
    </Card>
  )
}

export default CardGame