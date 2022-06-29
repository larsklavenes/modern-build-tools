import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUsers, usersDataSelector } from 'src/store/usersSlice'

const Users: React.FC = () => {
  const dispatch = useDispatch()

  const { users, isLoading } = useSelector(usersDataSelector)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <List>
          {users.map(({ id, name }) => (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar>{name[0]}</Avatar>
              </ListItemAvatar>
              {name}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default Users
