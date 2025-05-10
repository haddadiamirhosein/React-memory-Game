import { Box, Container, Typography } from '@mui/material'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Ract-memorGame-MUI
        </Typography>
        <GameBoard />
      </Container>
    </Box>
  )
}

export default App