import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { IListItemButtonProps } from 'atom-props';

const ListItemButton: React.FC<IListItemButtonProps> = ({ title, icon, onClick }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default ListItemButton;
