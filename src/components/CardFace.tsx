import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface Props{
    icon : string;
    onClickitme ?: () => void | null;
}

function CardFace({icon , onClickitme}:Props) {
  return (
    <CardActionArea
            onClick={onClickitme}
            data-active={ undefined}
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
             }}>
              <Typography variant="h5" component="div" sx={{ fontSize: '3rem' }}>
                {icon}
              </Typography>
            </CardContent>
    </CardActionArea>
  )
}

export default CardFace