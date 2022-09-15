import { Divider, Row, Col } from "antd";
import { Image, Button } from "antd";
import Vector from "../images/Vector.svg";
import console from "../images/console.svg";
import bolt from "../images/bolt.svg";

const content = () => {
  return (
    <>
      <div>
        <div style={{ textAlign: "center", paddingTop: "60px" }}>
          <h1 style={{ margin: "auto" }}>
            Utterly <span style={{ color: "blue" }}>transparent pricing,</span>{" "}
            for businesses of all sizes.
          </h1>
          <p style={{ fontWeight: "400", fontSize: "24px", color: "#706F6F" }}>
            Usage-based pricing with monthly payments
          </p>
        </div>

        {/* Cards */}
        <div>
          <div
            style={{
              maxWidth: "1072px",
              margin: "auto",
              background: "#EDF3FF",
              marginTop: "50px",
              borderRadius: "8px",
            }}
          >
            <Row style={{ padding: "50px" }}>
              {/* card 1 */}
              <Col span={8}>
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <div>
                    <span style={{ fontWeight: "500", fontSize: "22px" }}>
                      Free Tier
                    </span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "400", fontSize: "16px" }}>
                      Up to
                    </span>{" "}
                    <span style={{ fontWeight: "500", fontSize: "22px" }}>
                      2000
                    </span>
                    <span style={{ fontWeight: "400", fontSize: "16px" }}>
                      {" "}
                      checks per month
                    </span>
                  </div>
                </div>
              </Col>
              <Divider type="vertical" style={{ height: "100px" }} />
              {/* card 2 */}
              <Col span={7}>
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <div>
                    <span style={{ fontWeight: "500", fontSize: "22px" }}>
                      Fixed price per month
                    </span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "400", fontSize: "16px" }}>
                      Starts from
                    </span>{" "}
                    <span style={{ fontWeight: "500", fontSize: "22px" }}>
                      $500
                    </span>
                  </div>
                </div>
              </Col>
              <Divider type="vertical" style={{ height: "100px" }} />
              {/* card 3 */}
              <Col span={8}>
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                  <div>
                    <span style={{ fontWeight: "500", fontSize: "22px" }}>
                      Annual payment with 25% off
                    </span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "400", fontSize: "16px" }}>
                      Starts from{" "}
                    </span>
                    <span style={{ fontWeight: "500", fontSize: "22px" }}>
                      $4,500
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Key points of flagright api  */}

        <div>
          <div style={{ maxWidth: "860px", margin: "auto", marginTop: "50px" }}>
            {/* row 1 */}
            <Row style={{ padding: "1px" }}>
              {/* col 1 */}
              <Col span={13} style={{ paddingLeft: "50px" }}>
                <Row>
                  <Col span={2} style={{ float: "right" }}>
                    <Image src={Vector} preview={false} height={20} />
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "500", fontSize: "16px" }}>
                        Case management
                      </span>
                      <br></br>
                      <span style={{ fontWeight: "400", fontSize: "14px" }}>
                        Centralize your compliance & fraud prevention<br></br>{" "}
                        operations in a single investigation tool.
                      </span>{" "}
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* col 2 */}
              <Col span={10}>
                <Row>
                  <Col span={2} style={{ float: "right" }}>
                    <Image src={Vector} preview={false} height={20} />
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "500", fontSize: "16px" }}>
                        No code
                      </span>
                      <br></br>
                      <span style={{ fontWeight: "400", fontSize: "14px" }}>
                        It's 70% faster to integrate the Flagright API<br></br>{" "}
                        compared to market benchmark of 2-4 months
                      </span>{" "}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* row 2 */}
            <Row style={{ marginTop: "25px" }}>
              {/* col 1 */}
              <Col span={13} style={{ paddingLeft: "50px" }}>
                <Row>
                  <Col span={2} style={{ float: "right" }}>
                    <Image src={Vector} preview={false} height={20} />
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "500", fontSize: "16px" }}>
                        Unlimited number of seats on console
                      </span>
                      <br></br>
                      <span style={{ fontWeight: "400", fontSize: "14px" }}>
                        Add as many team members as you like with no<br></br>{" "}
                        additional cost.
                      </span>{" "}
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* col 2 */}
              <Col span={10}>
                <Row>
                  <Col span={2} style={{ float: "right" }}>
                    <Image src={Vector} preview={false} height={20} />
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "500", fontSize: "16px" }}>
                        Super-fast integration time
                      </span>
                      <br></br>
                      <span style={{ fontWeight: "400", fontSize: "14px" }}>
                        No setup, integration, or implementation fees.<br></br>{" "}
                        All training, support, and services are included in the
                        <br></br> price you see.
                      </span>{" "}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* row 3 */}
            <Row style={{ marginTop: "25px" }}>
              {/* col 1 */}
              <Col span={13} style={{ paddingLeft: "50px" }}>
                <Row>
                  <Col span={2} style={{ float: "right" }}>
                    <Image src={Vector} preview={false} height={20} />
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "500", fontSize: "16px" }}>
                        Rule configuration
                      </span>
                      <br></br>
                      <span style={{ fontWeight: "400", fontSize: "14px" }}>
                        Add as many team members as you like with no<br></br>{" "}
                        additional cost.
                      </span>{" "}
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* col 2 */}
              <Col span={10}>
                <Row>
                  <Col span={2} style={{ float: "right" }}>
                    <Image src={Vector} preview={false} height={20} />
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "500", fontSize: "16px" }}>
                        No integration or implementation fees
                      </span>
                      <br></br>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>

        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <Image
            src={console}
            preview={false}
            style={{ width: "842px", height: "441px" }}
          />
        </div>

        {/* footer */}

        <div
          style={{
            marginTop: "15px",
            textAlign: "center",
            background: "#0D254B",
            padding: "50px",
          }}
        >
          <Image src={bolt} preview={false} style={{ marginTop: "20px" }} />
          <div
            style={{ fontWeight: "400", fontSize: "26px", color: "#FFFFFF" }}
          >
            All inclusive, unlimited support & training
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button type="primary">Request Demo</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;
