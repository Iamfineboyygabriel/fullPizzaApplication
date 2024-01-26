import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to }) {
  const className = "bg-yellow-400 uppercase font-semibold text-stone-800 " +
    "py-3 tracking-wide rounded-full px-4 inline-block hover:bg-yellow-300 " +
    "transition-colors duration-300 focus:outline-none focus:ring " +
    "focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  to: PropTypes.string, // Assuming 'to' is a string for Link
};
