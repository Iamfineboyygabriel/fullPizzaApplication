import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

/**here, we use the "useRouteError" hook to catch in error that occur
 *
 * and the navigate function here is just to take us a step backward
 */
function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to='-1'li>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
