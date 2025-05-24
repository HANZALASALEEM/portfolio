interface StarProps {
  width: number;
}

const Star = ({ width }: StarProps) => {
  const half = width / 2;
  // const half = Math.floor(width / 2);

  return (
      <div
          style={{ width, height: width }}
          className="bg-primary"
      >
        <div className="flex">
          <div
              style={{ width: half, height: half}}
              className="bg-secondary rounded-br-full"
          ></div>
          <div
              style={{ width: half, height: half}}
              className="bg-secondary rounded-bl-full"
          ></div>
        </div>
        <div className="flex">
          <div
              style={{ width: half, height: half}}
              className="bg-secondary rounded-tr-full"
          ></div>
          <div
              style={{ width: half, height: half}}
              className="bg-secondary rounded-tl-full"
          ></div>
        </div>
      </div>
  );
};

export default Star;

// interface StarProps {
//   width: number;
// }
//
// const Star = ({ width }: StarProps) => {
//   const half = width / 2;
//
//   return (
//       <div
//           style={{ width, height: width }}
//           className="relative bg-primary"
//       >
//         {/* Top Left */}
//         <div
//             style={{ width: half, height: half }}
//             className="bg-secondary rounded-br-full absolute top-0 left-0"
//         ></div>
//
//         {/* Top Right */}
//         <div
//             style={{ width: half, height: half }}
//             className="bg-secondary rounded-bl-full absolute top-0 right-0"
//         ></div>
//
//         {/* Bottom Left */}
//         <div
//             style={{ width: half, height: half }}
//             className="bg-secondary rounded-tr-full absolute bottom-0 left-0"
//         ></div>
//
//         {/* Bottom Right */}
//         <div
//             style={{ width: half, height: half }}
//             className="bg-secondary rounded-tl-full absolute bottom-0 right-0"
//         ></div>
//       </div>
//   );
// };
//
// export default Star;
