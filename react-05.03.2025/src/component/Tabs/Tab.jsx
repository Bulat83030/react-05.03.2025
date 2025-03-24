export const Tab = ({ tab, onClick }) => {
  const { title, active } = tab;
  return (
    <button disabled={active} onClick={onClick}>
      {title}
    </button>
  );
};
