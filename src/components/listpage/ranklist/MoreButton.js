// import "./MoreButton.css";

// const MoreButton = ({
//   isLoading,
//   loadingError,
//   idolListLength,
//   handleMoreBtn,
//   nextCursor,
// }) => {
//   return (
//     <div className="more-button">
//       {isLoading && idolListLength > 0 ? (
//         <button disabled>Loading...</button>
//       ) : (
//         !loadingError &&
//         nextCursor && <button onClick={handleMoreBtn}>더 보기</button>
//       )}
//     </div>
//   );
// };

// export default MoreButton;

// const MoreButton = ({
//   isLoading,
//   loadingError,
//   // idolListLength,
//   handleMoreBtn,
//   nextCursor,
// }) => {
//   // If there's an error or no more data to load, don't render the button
//   if (!nextCursor || loadingError) return null;

//   return (
//     <div className="more-button">
//       <button onClick={handleMoreBtn} disabled={isLoading}>
//         {isLoading ? "Loading..." : "더 보기"}
//       </button>
//     </div>
//   );
// };

// export default MoreButton;

const MoreButton = ({ isLoading, loadingError, handleMoreBtn, nextCursor }) => {
  // Determine if the button should be disabled
  const isDisabled = isLoading || !nextCursor || loadingError;

  return (
    <div className="more-button">
      <button onClick={handleMoreBtn} disabled={isDisabled}>
        {isLoading ? 'Loading...' : '더 보기'}
      </button>
    </div>
  );
};

export default MoreButton;
