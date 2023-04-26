import React, { useState } from 'react'
import "./topbar.css";
import { NotificationsNone , Language, Settings  } from '@mui/icons-material';
import { List, IconButton, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { userData } from '../../dummyData';
import { Link } from 'react-router-dom';
export default function Topbar() {
  const demodata = ["anh", "duc", "like", "h"];
  const [dense, setDense] = React.useState(false);
  const [noti, setNoti] = useState(false);
  const [data, setData] = useState(demodata);
  const handleDelete = (name) => {
    setData(oldData => [...oldData, "adee"]);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shopify</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer" onClick={()=>{setNoti(!noti)}}>
            <NotificationsNone />
            <span className="topIconBadge">{data.length}</span> </div>
            {noti ? 
            <div className='list-noti'>
            <List dense={dense}>
            {data.map((item) => (
                
                <ListItem
                  secondaryAction={
                    <IconButton onClick={() => handleDelete(item)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  {item}
                  <ListItemText
                  />
                </ListItem>
                ))}
            </List>
            </div>
            : null} */}
          <div className="topbarIconContainer">
          {JSON.parse(sessionStorage.getItem('user')).name}
          </div>
          <Link to = {"http://localhost:3000/dashboard/user/"+JSON.parse(sessionStorage.getItem('user')).username}>
          <Avatar src={JSON.parse(sessionStorage.getItem('user')).avatar} alt="" className="topAvatar" />
          </Link>
        </div>
      </div>
    </div>
  );
}
