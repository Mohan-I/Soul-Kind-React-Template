import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Faqs from '../components/frequent/faqs';
import Footer from '../components/common/footer';
import Blog from '../components/frequent/blog';
import hero from '../assets/img/banner.png'

const landing = () => {
  return (
    <>
      <div className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
        Border hero with cropped image and shadows
      </h1>
      <p className="lead">
        Quickly design and customize responsive mobile-first sites with
        Bootstrap, the world’s most popular front-end open source toolkit,
        featuring Sass variables and mixins, responsive grid system, extensive
        prebuilt components, and powerful JavaScript plugins.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
        >
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          Default
        </button>
      </div>
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
      <center>
      <img
        className="rounded-lg-3"
        src={hero}
        alt=""
        width="60%"
      />
      </center>
    </div>
  </div>
</div>



<div className="container px-4 py-5">
  <h2 className="pb-2 border-bottom">Features with title</h2>
  <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
    <div className="col d-flex flex-column align-items-start gap-2">
      <h2 className="fw-bold text-body-emphasis">
        Left-aligned title explaining these awesome features
      </h2>
      <p className="text-body-secondary">
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <a href="#" className="btn btn-primary btn-lg">
        Primary button
      </a>
    </div>
    <div className="col">
      <div className="row row-cols-1 row-cols-sm-2 g-4">
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h4 className="fw-semibold mb-0 text-body-emphasis">
            Featured title
          </h4>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#gear-fill" />
            </svg>
          </div>
          <h4 className="fw-semibold mb-0 text-body-emphasis">
            Featured title
          </h4>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#speedometer" />
            </svg>
          </div>
          <h4 className="fw-semibold mb-0 text-body-emphasis">
            Featured title
          </h4>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#table" />
            </svg>
          </div>
          <h4 className="fw-semibold mb-0 text-body-emphasis">
            Featured title
          </h4>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<br />

<Blog />


<div className="row px-5">
<br />
<center>
  <br />
  <h4>FAQS</h4>
  <br />
</center>
  <div className="col-md-6 col-sm-12">
  <Faqs />
  </div>

  <div className="col-md-6 col-sm-12">
  <Faqs />
  </div>
 
</div>
<br /> <br />
<Footer />

    </>
  )
}

export default landing
