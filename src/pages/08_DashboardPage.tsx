import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Paper,
  Grid,
  Alert,
} from "@mui/material";

import MapComponent from '../components/MapComponent';

import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const detectedObjects = [
    { obj_id: 'abc123', type: 'car', lat: 14.2976, lng: 101.1663 },
    { obj_id: 'xyz789', type: 'person', lat: 14.2978, lng: 101.1670 },
  ];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0d1117', // สีพื้นหลังเท่ ๆ
      }}
    >
      <div
        style={{
          width: '80vw',
          height: '80vh',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <MapComponent
          objects={detectedObjects}
          imagePath="/images/camera1.jpg"
          cameraLocation="defence"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
