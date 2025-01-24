import React from 'react'

const practice = () => {
  return (
    <div>practice</div>
  )
}

export default practice






// import React, { useState } from "react";

// const Practice = () => {
//   const [showModal, setShowModal] = useState(false); // Controls the overall modal visibility
//   const [showFormModal, setShowFormModal] = useState(true); // Controls the first modal visibility
//   const [formData, setFormData] = useState({
//     name: "",
//     limit: "",
//     categories: [],
//     frequency: "",
//     notification: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleNext = () => {
//     setShowFormModal(false);
//   };

//   const handleBack = () => {
//     setShowFormModal(true);
//   };

//   const handleAdd = () => {
//     console.log("Budget Added:", formData); // Perform any action with the formData
//     setFormData({
//       name: "",
//       limit: "",
//       categories: [],
//       frequency: "",
//       notification: "",
//     }); // Clear the form
//     setShowModal(false); // Close the modal
//   };

//   const handleOpenModal = () => {
//     setShowModal(true); // Open the modal
//     setShowFormModal(true); // Start with the form modal
//   };

//   if (!showModal) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <button
//           onClick={handleOpenModal}
//           className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600"
//         >
//           Open Form
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       {showFormModal ? (
//         // First Modal (Form)
//         <div className="bg-white p-6 rounded-lg w-96">
//           <h2 className="text-lg font-bold mb-4">Fill the Form</h2>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Limit</label>
//               <input
//                 type="number"
//                 name="limit"
//                 value={formData.limit}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg p-2"
//               />
//             </div>
//           </div>
//           <button
//             onClick={handleNext}
//             className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Summary
//           </button>
//         </div>
//       ) : (
//         // Second Modal (Summary)
//         <div className="bg-white p-6 rounded-lg w-96">
//           <div className="flex items-center justify-between mb-4">
//             <button onClick={handleBack} className="text-blue-500 text-sm">
//               ← Back
//             </button>
//             <h2 className="text-lg font-bold">Summary</h2>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-gray-500">Name</p>
//               <p className="text-lg font-bold">{formData.name || "N/A"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Limit</p>
//               <p className="text-lg font-bold">{formData.limit || "N/A"}</p>
//             </div>
//           </div>
//           <button
//             onClick={handleAdd}
//             className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//           >
//             Add
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;
