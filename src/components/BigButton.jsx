export default function BigButton({ children, className = '', ...props }) {
  return (
    <button className={`big-button ${className}`} {...props}>
      {children}
    </button>
  );
}
