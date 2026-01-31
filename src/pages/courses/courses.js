import React from 'react'

const Courses = () => {
  return (
    <div>
  <main>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold">Designed for engineers</h1>
        <h3 className="fw-normal text-muted mb-3">
          Build anything you want with Aperture
        </h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a className="icon-link" href="#">
            Learn more
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          <a className="icon-link" href="#">
            Buy
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p>
              <a className="btn btn-lg btn-primary" href="#">
                Sign up today
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
            <p>
              <a className="btn btn-lg btn-primary" href="#">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg
          className="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p>
              <a className="btn btn-lg btn-primary" href="#">
                Browse gallery
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Marketing messaging and featurettes
  ================================================== */}
  {/* Wrap the rest of the page in another container to center all the content. */}
  <div className="container marketing">
    {/* Three columns of text below the carousel */}
    <div className="row">
      <div className="col-lg-4">
        <svg
          className="bd-placeholder-img rounded-circle"
          width={140}
          height={140}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>
          Some representative placeholder content for the three columns of text
          below the carousel. This is the first column.
        </p>
        <p>
          <a className="btn btn-secondary" href="#">
            View details »
          </a>
        </p>
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-4">
        <svg
          className="bd-placeholder-img rounded-circle"
          width={140}
          height={140}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>
          Another exciting bit of representative placeholder content. This time,
          we've moved on to the second column.
        </p>
        <p>
          <a className="btn btn-secondary" href="#">
            View details »
          </a>
        </p>
      </div>
      {/* /.col-lg-4 */}
      <div className="col-lg-4">
        <svg
          className="bd-placeholder-img rounded-circle"
          width={140}
          height={140}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <h2 className="fw-normal">Heading</h2>
        <p>
          And lastly this, the third column of representative placeholder
          content.
        </p>
        <p>
          <a className="btn btn-secondary" href="#">
            View details »
          </a>
        </p>
      </div>
      {/* /.col-lg-4 */}
    </div>
    {/* /.row */}
    {/* START THE FEATURETTES */}
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">
          First featurette heading.{" "}
          <span className="text-body-secondary">It’ll blow your mind.</span>
        </h2>
        <p className="lead">
          Some great placeholder content for the first featurette here. Imagine
          some exciting prose here.
        </p>
      </div>
      <div className="col-md-5">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width={500}
          height={500}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">
          Oh yeah, it’s that good.{" "}
          <span className="text-body-secondary">See for yourself.</span>
        </h2>
        <p className="lead">
          Another featurette? Of course. More placeholder content here to give
          you an idea of how this layout would work with some actual real-world
          content in place.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width={500}
          height={500}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">
          And lastly, this one.{" "}
          <span className="text-body-secondary">Checkmate.</span>
        </h2>
        <p className="lead">
          And yes, this is the last block of representative placeholder content.
          Again, not really intended to be actually read, simply here to give
          you a better view of what this would look like with some actual
          content. Your content.
        </p>
      </div>
      <div className="col-md-5">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width={500}
          height={500}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
          <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    {/* /END THE FEATURETTES */}
  </div>
  {/* /.container */}
  {/* FOOTER */}
  <footer className="container py-5">
    <div className="row">
      <div className="col-12 col-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="d-block mb-2"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Product</title>
          <circle cx={12} cy={12} r={10} />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </svg>
        <small className="d-block mb-3 text-body-secondary">© 2017–2024</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Cool stuff
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Random feature
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Team feature
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Stuff for developers
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Another one
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Last time
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Resource name
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Resource
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Another resource
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Final resource
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Business
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Education
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Government
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Gaming
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Locations
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Privacy
            </a>
          </li>
          <li>
            <a className="link-secondary text-decoration-none" href="#">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p className="float-end">
      <a href="#">Back to top</a>
    </p>
    <p>
      © 2017–2024 Company, Inc. · <a href="#">Privacy</a> ·{" "}
      <a href="#">Terms</a>
    </p>
  </footer>
</main>

    </div>
  )
}

export default Courses
