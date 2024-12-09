// src/components/PopularCategories.js
import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Example icon, adjust as needed
import './index.css';
// import ''

const categories = [
  { title: 'General Education', courses: '02 Courses', img: 'path-to-general-education-image.jpg' },
  { title: 'Computer Science', courses: '04 Courses', img: 'path-to-computer-science-image.jpg' },
  { title: 'Civil Engineering', courses: '08 Courses', img: 'path-to-civil-engineering-image.jpg' },
  { title: 'Artificial Intelligence', courses: '03 Courses', img: 'path-to-ai-image.jpg' },
  { title: 'Business Studies', courses: '12 Courses', img: 'path-to-business-studies-image.jpg' },
  { title: 'Computer Engineering', courses: '05 Courses', img: 'path-to-computer-engineering-image.jpg' },
];

const PopularCategories = () => {
  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Typography variant="h6" color="primary" align="center" gutterBottom>
        TOP CATEGORIES
      </Typography>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Popular Online Categories
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: '2rem' }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: 'relative', borderRadius: '15px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="250"
                image={category.img}
                alt={category.title}
                sx={{ filter: 'brightness(0.7)' }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  color: '#fff',
                }}
              >
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                  <SchoolIcon sx={{ marginRight: '8px', color: '#ff6b6b' }} /> {category.title}
                </Typography>
                <Typography variant="body2">{category.courses}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularCategories;
