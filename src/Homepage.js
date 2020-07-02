import React, { Component } from "react";
import strawb from "./images/strawb.jpg";
import canon from "./images/canon.jpg";
import angphoto from "./images/angphoto.jpg";
import library from "./images/library.jpg";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row m-5 4cards">
          <div className="cardi col-lg-3">
            <h5 className="card-title">CARD TITLE</h5>
            <p className="card-text">
              Some quick example text to build on the card title and .
            </p>
            <img src={strawb} className="card-img-top" alt="..." />
            <div className="card-body">
            <button className="btn btn-danger mb-5  text-white">
            MORE 
          </button>
            </div>
          </div>
          <div className="cardi col-lg-3">
            <h5 className="card-title">CARD TITLE</h5>
            <p className="card-text">
              Some quick example text to build on the card title and .
            </p>
            <img src={canon} className="card-img-top" alt="..." />
            <div className="card-body">
            <button className="btn btn-danger  text-white">
                MORE
              </button>
            </div>
          </div>
          <div className="cardi col-lg-3">
            <h5 className="card-title">CARD TITLE</h5>
            <p className="card-text">
              Some quick example text to build on the card title and .
            </p>
            <img src={library} className="card-img-top" alt="..." />
            <div className="card-body">
              <button  className="btn btn-danger  text-white">
                MORE
              </button>
            </div>
          </div>
          <div className="cardi col-lg-3">
            <h5 className="card-title">CARD TITLE</h5>
            <p className="card-text">
              Some quick example text to build on the card title and .
            </p>
            <img src={angphoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <button  className="btn btn-danger  text-white">
                MORE
              </button>
            </div>
          </div>
        </div>

        <div className="row ml-5 mainone">
          <div className="col-lg-5 ml-2">
            <h3>Some quick example text to build on the card title</h3>
            <h5>Lorem ipsum dolor sit amet consectetur </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              recusandae provident obcaecati nihil aperiam. Exercitationem
              quaerat cumque officia dicta unde illo fuga alias fugiat. Quia
              accusantium quisquam qui et esse! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat recusandae provident
              obcaecati nihil aperiam. Exercitationem quaerat cumque officia
              dicta unde illo fuga alias fugiat. Quia accusantium quisquam qui
              et esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat recusandae provident obcaecati nihil aperiam.
              Exercitationem quaerat cumque officia dicta unde illo fuga alias
              fugiat. Quia accusantium quisquam qui et esse! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quaerat recusandae
              provident obcaecati nihil aperiam. Exercitationem quaerat cumque
              officia dicta unde illo fuga alias fugiat. Quia accusantium
              quisquam qui et esse! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat recusandae provident obcaecati nihil
              aperiam. Exercitationem quaerat cumque officia dicta unde illo
              fuga alias fugiat. Quia accusantium quisquam qui et esse!
            </p>
            <button className="btn btn-danger mb-5  text-white">
              MORE DETAILS
            </button>
          </div>
          <div className="col-lg-3 col-xs-12">
            <h3>Second div</h3>

            <div className="cardi">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={strawb} className="card-img mt-4" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>
                      This is a wider card with supporting text below as a
                      natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardi">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={canon} className="card-img mt-4" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>
                      This is a wider card with supporting text below as a
                      natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardi">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={angphoto} className="card-img mt-4" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>
                      This is a wider card with supporting text below as a
                      natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardi">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={library} className="card-img mt-4" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>
                      This is a wider card with supporting text below as a
                      natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-3">wider card</h3>
            <a href="/" style={{ color: "red" }} className="mt-5">
              obcaecati nihil supporting text
            </a>

            <hr />

            <a href="/" style={{ color: "red" }} className="mt-5">
              macsffjyu onloah supporting text
            </a>

            <hr />

            <a href="/" style={{ color: "red" }} className="mt-5">
              kitgrewdsh sisuss supporting text
            </a>

            <hr />

            <a href="/" style={{ color: "red" }} className="mt-5">
              lorem dangertsjsc supporting text
            </a>
            <h3 className="mt-5">anchor-is-valid</h3>
            <a href="/" style={{ color: "red" }} className="mt-5">
              obcaecati nihil supporting text
            </a>

            <hr />

            <a href="/" style={{ color: "red" }} className="mt-5">
              macsffjyu onloa supporting texth
            </a>

            <hr />

            <a href="/" style={{ color: "red" }} className="mt-5">
              kitgrewdsh sisusssupporting text
            </a>

            <hr />

            <a href="/" style={{ color: "red" }} className="mt-5">
              lorem dangertsjscsupporting text
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
