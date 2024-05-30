// import { useState, useEffect } from 'react';
// import './FloatingElement.css'; // Import CSS file for styling

// const CircularFloatingElement = ({ numElements, rotationSpeed }) => {
//     const [elementPositions, setElementPositions] = useState([]);

//     useEffect(() => {
//         const updatePositions = () => {
//             const currentTime = Date.now() / 1000;
//             const positions = Array.from({ length: numElements }, (_, index) => {
//                 const angle = (2 * Math.PI * index) / numElements + currentTime * rotationSpeed;
//                 const centerX = window.innerWidth / 2;
//                 const centerY = window.innerHeight / 3;
//                 const horizontalRadius = 500; // Adjust the horizontal radius
//                 const verticalRadius = 500; // Adjust the vertical radius
//                 const x = centerX + Math.cos(angle) * horizontalRadius;
//                 const y = centerY + Math.sin(angle) * verticalRadius;
//                 return { x, y };
//             });
//             setElementPositions(positions);
//         };

//         const interval = setInterval(updatePositions, 50);

//         return () => clearInterval(interval);
//     }, [numElements, rotationSpeed]);

//     return (
//         <>
//             <div className="fixed circular-floating-container">
//                 {elementPositions.map((position: { x: number, y: number }, index: number) => (
//                     <div
//                         key={index}
//                         className="circular-floating-element"
//                         style={{ left: position.x, top: position.y }}
//                     >
//                         <img
//                             src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png`}
//                             className="rounded-full w-12 h-12"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </>

//     );
// };

// export default CircularFloatingElement;
