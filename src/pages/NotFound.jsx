import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap section text-center">
      <h1 className="display-xl">Nothing here.</h1>
      <p className="mt-6 text-muted">That page does not exist, or it moved.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
