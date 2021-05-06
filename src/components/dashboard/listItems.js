import React from "react";
import { Link } from 'react-router-dom';
import OperationsForm from "../../pages/OperationsForm";
import { Route } from 'react-router-dom';
import Balance from "./Balance";

//Icons

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";
import GridOnIcon from "@material-ui/icons/GridOn";
import Divider from '@material-ui/core/Divider';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';


//Body

export const mainListItems = (
  <div>



  
    <ListItem button component={Link} to="/admin/Home">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />  
      
    </ListItem>    
    

    
    <ListItem button component={Link} to="/admin/OperationsForm">
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Operations" /> 
      
    </ListItem>

     
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <GridOnIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>


  </div>
);

export const secondaryListItems = (
  <div>
    <listItem>
      <Divider/>
        </listItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon/>
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CallIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon/>
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
);
