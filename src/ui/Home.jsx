import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  //here we only want to display this if there is no user yet so we reading it form the store
  const username = useSelector((state) => state.user.username);

  return (
    <div className="sm:y-16 my-10 text-center sm:my-16">
      <h1 className=" mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
