import { useNavigate, useRouteError } from "react-router-dom";

/**here, we use the "useRouteError" hook to catch in error that occur
 *
 * and the navigate function here is just to take us a step backward
 */
function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
