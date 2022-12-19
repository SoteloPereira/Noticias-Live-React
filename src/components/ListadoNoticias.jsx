import Grid from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
//para obtener las noticias llamamos el hook personalizado que llama al context
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {
    //pagina para sincronizarlo con el componente Pagination, asignando el valor a la prop page
    const { noticias, totalNoticias, handleChangePage, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 10)
    console.log(totalPaginas);
  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant={'h3'}
        component={'h2'}
        >

        Noticias en Vivo
      </Typography>
      <Grid container spacing={3}>
            {noticias.map( noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia = {noticia}
                />
            ))}

      </Grid>
        <Stack spacing={2} marginY={4} marginX="auto" direction="row" justifyContent={'center'} >
            {/* para igualar el valor de la pagina y el del state interno de pagination, definimos la prop
            con el valor de pagina, asi estarán sincronizados */}
            <Pagination count={totalPaginas} color="primary" 
                onChange={handleChangePage}
                page ={ pagina }
                />
        </Stack>

    </>
  )
}

export default ListadoNoticias
