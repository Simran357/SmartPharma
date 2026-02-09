import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import SchoolIcon from '@mui/icons-material/School'

import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { text: 'Inventory', path: '/Inventory' },
    { text: 'Retailer', path: '/Retailer' },
    { text: 'WholeSaler', path: '/' },
    { text: 'Billing', path: '/Billing' },
    { text: 'Cart', path: '/Cart' },
    {text:"Login", path:"/Login"},
    {text:"Register",path:"/Register"},
    {text:"Order",path:"/Order"}
  ]

  const isActive = (path) => location.pathname === path

  const handleNavigate = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <>
      {/* ================= APP BAR ================= */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,0.15)',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
          color: '#000'
        }}
      >
        <Toolbar>

          {/* LEFT: LOGO + TITLE */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <SchoolIcon sx={{ fontSize: 32, mr: 1 }} />

            <Box>
              <Typography fontWeight="bold" lineHeight={1.2}>
               SmartPharma
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Admin Portal
              </Typography>
            </Box>
          </Box>

          {/* SPACER */}
          <Box sx={{ flexGrow: 1 }} />

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  color: isActive(item.path) ? '#1976d2' : '#000',
                  fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  borderBottom: isActive(item.path)
                    ? '2px solid #1976d2'
                    : '2px solid transparent',
                  borderRadius: 0
                }}
              >
                {item.text}
              </Button>
            ))}

         
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= DRAWER (MOBILE) ================= */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: 260,
            backgroundColor: '#fff'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SchoolIcon sx={{ mr: 1 }} />
            <Box>
              <Typography fontWeight="bold">SmartPharma</Typography>
              <Typography variant="caption">Admin Portal</Typography>
            </Box>
          </Box>

          <Divider />

          {/* Drawer Menu */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: isActive(item.path) ? 'primary' : 'text.primary',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        
        </Box>
      </Drawer>
    </>
  )
}

export default Header
