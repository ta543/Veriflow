// import express, { Request, Response } from 'express';
// import fs from 'fs';
// import path from 'path';

// const app = express();
// const port = 3000;  // You can change the port if necessary

// // Serve the logs when requested
// app.get('/logs', (req: Request, res: Response) => {
//     const logsPath = path.join(__dirname, '..', 'logs', 'test-log.txt');  // Make sure this points to the correct location of your logs file

//     if (fs.existsSync(logsPath)) {
//         fs.readFile(logsPath, 'utf8', (err, data) => {
//             if (err) {
//                 res.status(500).send('Error reading logs');
//             } else {
//                 res.setHeader('Content-Type', 'text/plain');
//                 res.send(data);
//             }
//         });
//     } else {
//         res.status(404).send('Logs not found');
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
