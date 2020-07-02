import React, { Component } from "react";
import "./index.css";
import strawb from "./images/strawb.jpg";
import canon from "./images/canon.jpg";
import angphoto from "./images/angphoto.jpg";
import greece from "./images/greece.jpg";
import library from "./images/library.jpg";
export default class Const extends Component {
  render() {
    return (
      <div>
        <div id="bgimg" className="bgimage">
          <div className="row mx-3 firstup mb-5 ">
            <div className="card  col-lg-3 mx-auto mt-5">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={canon} className="dms" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in
                    </p>
                    <button className="btn btn-danger mb-5  text-white">
                      MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  col-lg-3 mx-auto mt-5">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={angphoto} className="dms" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in
                    </p>
                    <button className="btn btn-danger mb-5  text-white">
                      MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-lg-3  mx-auto mt-5">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={strawb} className="dms" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in
                    </p>
                    <button className="btn btn-danger mb-5  text-white">
                      MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="secdown row mx-5 ">
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white">Macante lactues</h4>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <h5 className="card-title">Special title treatment</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-white">
              <h4>Dollar resins</h4>
              <p>TRUNCATE CHSDHUJEJSKK</p>
              <p>
                With supporting text below as a natural lead-in to additional
                content.With supporting text below as a natural lead-in to
                additional
              </p>
              <hr />
              <br />
              <p>TRUNCATE CHSDHUJEJSKK</p>
              <p>
                With supporting text below as a natural lead-in to additional
                content.With supporting text below as a natural lead-in to
                additional
              </p>
              <hr />
            </div>
            <div className="col-lg-3 text-white">
              <h4>NULLA NEILFIELD</h4>
              <p>
                With supporting text below as a natural lead-in to additional
                content.With supporting text below as a natural lead-in to
                additional
              </p>
              <div className="row 6smpics mb-4">
                <div className="col-xs-3 mx-auto">
                  <img src={strawb} className="collage" alt="..." />
                </div>
                <div className="col-xs-3 mx-auto">
                  <img src={canon} className="collage" alt="..." />
                </div>
                <div className="col-xs-3 mx-auto">
                  <img src={library} className="collage" alt="..." />
                </div>
                <div className="col-xs-3 mx-auto">
                  <img src={greece} className="collage" alt="..." />
                </div>
                <div className="col-xs-3 mx-auto">
                  <img src={strawb} className="collage" alt="..." />
                </div>
                <div className="col-xs-3 mx-auto">
                  <img src={angphoto} className="collage" alt="..." />
                </div>
              </div>

              <button className="btn btn-danger mb-5  text-white">
                MORE COLLECTIONS
              </button>
            </div>

            <div className="col-lg-3 text-white">
              <h4>LUCTUS NENFILES</h4>

              <b>I am ending this task using react js</b>
              <hr />
              <p>
                With supporting text below as a natural lead-in to additional
                content.With supporting text below as a natural lead-in to
                additional With supporting text below as a natural lead-in to
                additional content.With supporting text below as a natural
                lead-in to additional With supporting text below as a natural
                lead-in to additional content.With supporting text below as a
                natural lead-in to additional With supporting text below
              </p>
              <button className="btn btn-danger mb-5  text-white">
                MORE Exploeue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
