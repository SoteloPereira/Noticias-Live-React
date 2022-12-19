import {FormControl, InputLabel, Select, MenuItem, Menu } from '@mui/material'
import CATEGORIAS from '../constants'
import useNoticias from '../hooks/useNoticias'

const Formulario = () => {

    const {categoria, handleChangeCategoria } = useNoticias()

  return (
    <form>
       <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
                label="Categoría"
                onChange={handleChangeCategoria}
                value={categoria}
                >
                {CATEGORIAS.map( c => (
                    <MenuItem value={c.value} key={c.value}>{c.label} </MenuItem>
                ))}
            </Select>
            {/* lo quitamos ya que con el useEffect, al cambiar categoria, se actualiza automatico
            <Box sx={{marginTop: 2}}>
                <Button fullWidth variant="contained" color="primary">
                        Buscar Noticias
                </Button>
            </Box> */}
            
       </FormControl>
    </form>
  )
}

export default Formulario
