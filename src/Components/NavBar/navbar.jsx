import React from "react";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
class Navbar extends React.PureComponent {
    render() {
        return (
            <AppBar position = "Static" component="nav">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}>
                        <Typography variant="h6" color="inherit" component={Link} to="/">
                            Team QWZMX
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button key={'Listing'} sx={{ color: '#fff' }} component={Link} to="/petlisting">
                            Listing
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button key={'Listing'} sx={{ color: '#fff' }} component={Link} to="/adoption">
                            Adoption
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button key={'Listing'} sx={{ color: '#fff' }} component={Link} to="/profile">
                            Profile
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;