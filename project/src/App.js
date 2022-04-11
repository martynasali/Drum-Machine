import Player from './Player';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


function App() {
  
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
        primary: {
            main: grey[500],
          }
      });

    return (
<>
<ThemeProvider theme={darkTheme}>
    <Player />
</ThemeProvider>
  
    
</> 
)

}

export default App;
