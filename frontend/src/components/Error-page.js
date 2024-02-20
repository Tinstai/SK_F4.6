import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. <Link to="http://localhost:8080/">Return</Link></p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}