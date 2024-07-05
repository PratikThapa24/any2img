import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

const navBarCSS = {
  borderRadius: "8px",
  backgroundColor: "#609966",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="p-4">
      <AppBar position="static" sx={navBarCSS} className="rounded-xl shadow-lg">
        <Toolbar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{margin : "20px"}}/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UserName
          </Typography>
          <Button
            color="inherit"
            sx={{
              ":hover": {
                backgroundColor: "#4B5563",
                color: "#ffffff",
              },
              padding: "6px 16px",
              borderRadius: "4px",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
