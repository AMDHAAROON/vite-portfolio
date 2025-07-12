// SkillSection.jsx
import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { 
  Html, Css, Javascript, 
  GitHub, Terminal, Devices
} from '@mui/icons-material';

const skills = [
  { name: 'HTML', icon: <Html fontSize="large" sx={{ color: '#E44D26' }} /> },
  { name: 'CSS', icon: <Css fontSize="large" sx={{ color: '#1572B6' }} /> },
  { name: 'JavaScript', icon: <Javascript fontSize="large" sx={{ color: '#F7DF1E' }} /> },
  { name: 'GitHub', icon: <GitHub fontSize="large" sx={{ color: '#333' }} /> },
  { name: 'CLI', icon: <Terminal fontSize="large" sx={{ color: '#4caf50' }} /> },
  { name: 'Responsive', icon: <Devices fontSize="large" sx={{ color: '#03A9F4' }} /> },
];

export default function SkillSection() {
  return (
    <Box id="skills" py={5} className="bg-[#e0e0e0] px-3">
      <div className="border-2 border-[#D7DDF0] bg-white px-10 pb-10 rounded-2xl shadow-2xl">
        <h3 className="font-cal text-5xl text-[#7596F7] pl-40 py-8">
          Tech stacks <span className="about"></span>
        </h3>

        <Grid
  container
  spacing={4}
  justifyContent="center"
  columns={{ xs: 6, sm: 12, md: 12 }} // Set up column system
>
  {skills.map((skill, index) => (
    <Grid
      key={index}
      sx={{
        gridColumn: { xs: 'span 3', sm: 'span 4', md: 'span 2' }
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 3,
          textAlign: 'center',
          borderRadius: '20px',
          backgroundColor: '#f9f9ff',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.08)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        }}
      >
        {skill.icon}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
            color: '#333',
            mt: 1,
          }}
        >
          {skill.name}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>

      </div>
    </Box>
  );
}
