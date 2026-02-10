// "use client";
// import { useResumeStore } from "./store";
// import Theme from "./theme";

// export default function LayoutWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { theme } = useResumeStore();

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-300 ${
//         theme
//           ? "bg-linear-to-br from-gray-50 via-white to-gray-100"
//           : "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
//       }`}
//     >
//       <Theme />
//       {children}
//     </div>
//   );
// }
