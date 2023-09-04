// import { handler } from './index'; // Import your Lambda function handler
// import { RequestEnvelope } from 'ask-sdk-model';

// const mockEvent: RequestEnvelope = {
//   version: '1.0',
//   session: {
//     // Mock session data
//     new: true,
//     sessionId: 'someSessionId',
//     application: {
//       applicationId: 'someApplicationId',
//     },
//     user: {
//       userId: 'someUserId',
//     },
//   },
//   context: {
//     // Mock context data
//     System: {
//       application: {
//         applicationId: 'someApplicationId',
//       },
//       user: {
//         userId: 'someUserId',
//       },
//       device: {
//         deviceId: 'someDeviceId',
//         supportedInterfaces: {},
//       },
//       apiEndpoint: ''
//     },
//   },
//   request: {
//     // Mock request data
//     type: 'LaunchRequest',
//     requestId: 'someRequestId',
//     timestamp: 'someTimestamp',
//   },
// };


// const mockContext = { /* Mock AWS Context */ };

// // Manually invoke handler
// handler(mockEvent, mockContext, (error: any, response: any) => {
//   console.log('Response: ', response);
//   if (error) console.error('Error: ', error);
// });
