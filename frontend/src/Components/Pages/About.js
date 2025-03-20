import React from "react";
import "../../Css/About.css";
import imageFootball from "../../assest/images/football.png";
import Mission from "../../assest/images/turfy-logo.png";
import TurfWork from "../../assest/images/turf-working.png";
import Journey from "../../assest/images/journey.png";
import Features from "../../assest/images/features.png";
import Contactus from "../../assest/images/contact-us.png";

const About = () => {
  return (
    <div className=" container-fluid bg-dark p-5 ">
      <div className=" row">
        <h1
          style={{
            fontFamily: "'Halant', Arial, sans-serif",
            fontSize: "45px",
            color: "rgb(0, 237, 100",
          }}
          className="autoShow col-12  p-5  text-center  text-uppercase"
        >
          About us
        </h1>
        <div className="container">
          <p className=" autoShow text-white col-12 text-center fs-4 ">
            Welcome to <strong>Turfy</strong>, your go-to platform for
            hassle-free turf booking. We understand how important it is to find
            and book the perfect turf for your sports activities, and our
            mission is to make that process as seamless as possible.
          </p>
        </div>
        
        <div className="col-12 col-md-6">
          <h2
            style={{
              fontFamily: "'Halant', Arial, sans-serif",
              fontSize: "45px",
              color: "rgb(0, 237, 100",
            }}
            className="autoShow mt-5 p-3 text-center"
          >
            Our Mission
          </h2>
          <p className="autoShow text-white text-center fs-5">
            Our mission is to provide an efficient and user-friendly platform
            for turf booking through our online application. Whether you're
            booking for a casual weekend game or an important tournament, our
            platform ensures you find the best available turf in just a few
            clicks.
          </p>
        </div>
        <div className="col-12 col-md-6 mt-4 d-flex justify-content-center">
          <img
            style={{ width: "400px", height: "300px" }}
            src={imageFootball}
            alt="mission"
            className="autoShow col-12 col-md-6 img-fluid  "
          />
        </div>
        <div className="col-12 col-md-6 mt-5 ">
          <h2
            style={{
              fontFamily: "'Halant', Arial, sans-serif",
              fontSize: "45px",
              color: "rgb(0, 237, 100",
            }}
            className="autoShow  text-start"
          >
            Why choose Turfy?
          </h2>
          <ul className="autoShow text-start list-unstyled ">
            <li className="text-white mb-2 ">
              Wide selection of turf options for various sports
            </li>
            <li className="text-white mb-2 ">
              Real-time availability and instant booking confirmations
            </li>
            <li className="text-white mb-2">
              Easy-to-use interface for booking, managing, and rescheduling your
              reservations
            </li>
            <li className="text-white mb-2">
              Transparent pricing with no hidden charges
            </li>
            <li className="text-white mb-2">
              24/7 customer support to assist you at every step
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 mt-4 d-flex justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            src={Mission}
            alt="mission"
            className="autoShow col-12 col-md-6 img-fluid  "
          />
        </div>
        <div className="col-12 col-md-6 mt-5 pt-4">
          <h2
            style={{
              fontFamily: "'Halant', Arial, sans-serif",
              fontSize: "45px",
              color: "rgb(0, 237, 100",
            }}
            className="autoShow mt-3"
          >
            How Our Turf Booking System Works
          </h2>
          <p className="autoShow text-white">
            We created <strong>Turfy</strong> to simplify the turf booking
            experience. Users can sign in, search for available turfs in their
            preferred location, view detailed information like turf amenities,
            ratings, and availability, and complete bookings instantly.
          </p>
          <p className="autoShow text-white">
            Turf owners also benefit by managing their turf schedules
            effortlessly. Our admin panel allows turf owners to update
            availability, confirm bookings, and even manage cancellations in
            real time.
          </p>
        </div>
        <div className="col-12 col-md-6 mt-5 pt-4 d-flex justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            src={TurfWork}
            alt="turf-working-process"
            className="autoShow"
          />
        </div>
       

        <div className="col-12 col-md-6 mt-5 pt-4">
          <h2
            style={{
              fontFamily: "'Halant', Arial, sans-serif",
              fontSize: "45px",
              color: "rgb(0, 237, 100",
            }}
            className="autoShow pt-4"
          >
            Our Journey
          </h2>
          <p className="autoShow text-white pt-4">
            Founded in 2024, <strong>Turfy</strong> was created to solve a
            common problem: finding and reserving sports turfs quickly and
            easily. We started with a simple idea, and today, we are proud to
            serve a growing community of players, organizers, and turf owners.
            Our platform continues to evolve, driven by user feedback and a
            commitment to providing the best turf booking experience.
          </p>
        </div>
        <div className="col-12 col-md-6 mt-5 p-4 d-flex justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            src={Journey}
            alt="turf-working-process"
            className="autoShow"
          />
        </div>

        <div className="col-12 col-md-6 mt-5 p-4 ">
          <h2
            style={{
              fontFamily: "'Halant', Arial, sans-serif",
              fontSize: "45px",
              color: "rgb(0, 237, 100",
            }}
            className="autoShow pt-4"
          >
            Looking Ahead
          </h2>
          <p className="autoShow text-white pt-4">
            At <strong>Turfy</strong>, we are constantly looking for ways to
            enhance our service. We plan to introduce more features like
            advanced search filters, loyalty programs for frequent users, and
            expanded turf listings to cover more locations. Stay tuned for
            exciting updates!
          </p>
        </div>
        <div className="col-12 col-md-6 mt-5 p-4 d-flex justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            src={Features}
            alt="turf-working-process"
            className="autoShow"
          />
        </div>
        <div className="col-12 col-md-6 mt-5 p-4 ">
          <h2
            style={{
              fontFamily: "'Halant', Arial, sans-serif",
              fontSize: "45px",
              color: "rgb(0, 237, 100",
            }}
            className="autoShow  pt-5"
          >
            Contact Us
          </h2>
          <p className="autoShow text-white pt-4">
            Have questions or need assistance? Feel free to{" "}
            <a href="/contact">reach out</a> to us, and our support team will be
            happy to help.
          </p>
        </div>
        <div className="col-12 col-md-6  d-flex justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            src={Contactus}
            alt="turf-working-process"
            className="autoShow"
          />
        </div>
        
      </div>
    </div>
  );
};

export default About;
