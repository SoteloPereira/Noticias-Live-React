import {Container, Grid, Typography} from '@mui/material'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'

function App() {


  return (
    <NoticiasProvider>
      <Container>
          <header>
              <Typography align="center" marginY={5} fontWeight='bold' component="h1"
                variant="h3"
              >
                  Últimas noticias <span>(Vivo)</span>
              </Typography>
          </header>
          {/* el grid tiene un ancho de 12, */}
            <Grid   
              container
              direction="row"
              justifyContent="center"
             
              >
              {/* este sera el primer hijo del grid "principal" */}
                <Grid item xs={12} md={6}> {/*el md para que sirva el grid padre debe tener la prop container */}
                    <Formulario />
                </Grid>
            </Grid>
            <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  )
}

export default App
