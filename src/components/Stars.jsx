function Star({ active }) {
  return (
    <svg
      className={`star-icon ${active ? "active" : "inactive"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={active ? "#FF6060" : "#E3E3E3"}
    >
      <path d="M12 .587l3.668 7.431L24 9.753l-6 5.851 1.417 8.263L12 18.896 4.583 23.867 6 15.604 0 9.753l8.332-1.735z" />
    </svg>
  );
}

export default Star;
