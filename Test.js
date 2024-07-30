const express = require('express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to enhance your app security
app.use(helmet());

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, Secure World!');
});

// Read SSL certificate and key
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(3000, () => {
  console.log('Secure server running on https://localhost:3000');
});

const rateLimit = require('express-rate-limit');

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Content Security Policy (CSP)
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});
