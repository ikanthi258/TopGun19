// src/pages/08_DashboardPage.tsx
import React, { useState } from "react";
import { Box, Button, TextField, Card, CardContent, Typography } from "@mui/material";
import { useSocket } from "../hooks/useSocket";

const DashboardPage: React.FC = () => {
  const [cameraId, setCameraId] = useState("");
  const [token, setToken] = useState("");
  const [enabled, setEnabled] = useState(false);

  const { isConnected } = useSocket(cameraId, enabled);

  const handleConnect = () => {
    setEnabled(true);
  };

  const handleDisconnect = () => {
    setEnabled(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Card sx={{ p: 3, width: "90%", maxWidth: 1200, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Connect to Camera Socket
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Camera ID"
              variant="outlined"
              fullWidth
              value={cameraId}
              onChange={(e) => setCameraId(e.target.value)}
            />
            <TextField
              label="Token"
              type="password"
              variant="outlined"
              fullWidth
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button
              variant="contained"
              color={enabled ? "error" : "primary"}
              sx={{ minWidth: 150 }}
              onClick={enabled ? handleDisconnect : handleConnect}
            >
              {enabled ? "DISCONNECT" : "CONNECT"}
            </Button>
          </Box>

          {isConnected && (
            <Typography sx={{ mt: 2, color: "green" }}>
              ✅ Connected to socket server
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;
