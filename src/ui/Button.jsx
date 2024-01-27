import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {
  const base =
    'bg-yellow-400 text-sm uppercase font-semibold text-stone-800 ' +
    ' tracking-wide rounded-full  inline-block hover:bg-yellow-300 ' +
    'transition-colors duration-300 focus:outline-none focus:ring ' +
    'focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'py-2 px-4 md:px-5 md:py-2.5 text-x5',
    secondary:
      'border-2 text-sm border-stone-300 uppercase font-semibold text-stone-400 ' +
      ' tracking-wide rounded-full  inline-block hover:bg-stone-300 ' +
      'transition-colors duration-300 focus:outline-none focus:ring ' +
      'focus:ring-stone-300 focus:ring-offset-2 hover:text-stone-800 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.bool.isRequired,
  to: PropTypes.string, // Assuming 'to' is a string for Link
};
