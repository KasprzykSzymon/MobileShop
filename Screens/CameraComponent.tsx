// import React, { useRef, useState } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import { Camera, CameraMode, PhotoFile} from 'react-native-vision-camera';
//
//
// const CameraComponent: React.FC = () => {
//   const cameraRef = useRef<Camera | null>(null);
//   const [capturedPhoto, setCapturedPhoto] = useState<PhotoFile | null>(null);
//
//   const takePhoto = async () => {
//     if (cameraRef.current) {
//       try {
//         const photo = await cameraRef.current.takePhoto({
//           quality: '0.8', // Adjust photo quality as needed
//           base64: false, // You can set this to true if you want the photo data in base64 format
//         });
//
//         setCapturedPhoto(photo);
//       } catch (error) {
//         console.error('Error taking photo:', error);
//       }
//     }
//   };
//
//   const renderCamera = () => {
//     return (
//       <Camera
//         ref={cameraRef}
//         style={{ flex: 1 }}
//         cameraMode={CameraMode.Photo}
//         autoFocus="on"
//         whiteBalance="auto"
//         zoom={0}
//       />
//     );
//   };
//
//   return (
//     <View style={{ flex: 1 }}>
//       {capturedPhoto ? (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Captured Photo:</Text>
//           <Text>{capturedPhoto.uri}</Text>
//         </View>
//       ) : (
//         <>
//           {renderCamera()}
//           <TouchableOpacity
//             style={{
//               position: 'absolute',
//               bottom: 16,
//               alignSelf: 'center',
//               padding: 16,
//               borderRadius: 8,
//               backgroundColor: 'white',
//             }}
//             onPress={takePhoto}
//           >
//             <Text>Take Photo</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };
//
// export default CameraComponent;
