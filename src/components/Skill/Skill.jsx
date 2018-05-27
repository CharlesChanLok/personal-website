import { faCss3, faCuttlefish, faGitSquare, faHtml5, faJsSquare, faNode, faNpm, faReact } from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import './Skill.css';

const Skill = (props) => {
  return (
    <div className='Skill'>
      <Card>
        <CardBody>
          <CardTitle>Technologies I used</CardTitle>
          <Container>
            <Row>
              <Col className='Skill-box'><FontAwesomeIcon icon={faHtml5} size="4x" />
                <p>HTML5</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faCss3} size="4x" />
                <p>CSS3</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faJsSquare} size="4x" />
                <p>Javascript</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faCuttlefish} size="4x" />
                <p>C</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faNode} size="4x" />
                <p>Nodejs</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faNpm} size="4x" />
                <p>NPM</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faReact} size="4x" />
                <p>React</p>
              </Col>
              <Col className='Skill-box'><FontAwesomeIcon icon={faGitSquare} size="4x" />
                <p>Git</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://loiane.gallerycdn.vsassets.io/extensions/loiane/ts-extension-pack/0.0.1/1503435730489/Microsoft.VisualStudio.Services.Icons.Default" alt="typescript" />
                <p>Typescript</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="http://clipartist.net/social/clipartist.net/P/postgresql_logo-555px.png" alt="postgresql" />
                <p>Postgresql</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://www.elastic.io/wp-content/uploads/2018/02/REST-API-connector.png" alt="restapi" />
                <p> REST API</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1489714432/postman.png" alt="postman" />
                <p>Postamn</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://camo.githubusercontent.com/30c7758f9ac63488d3c2814ed2dcd9dbb7e967f3/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6865726f6b752d312e737667" alt="heroku" />
                <p>Heroku</p>
              </Col>
              <Col className='Skill-box'>
                <p>Bcrypt</p>
              </Col>
              <Col className='Skill-box'>
                <p>Expressjs</p>
              </Col>
              <Col className='Skill-box'>
                <p>AJAX</p>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Technologies or knowledge I want to learn more</CardTitle>
          <Container>
            <Row>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/1.9.0/1526851136093/Microsoft.VisualStudio.Services.Icons.Default" alt="react redux" />
                <p>Redux (State management)</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://loiane.gallerycdn.vsassets.io/extensions/loiane/ts-extension-pack/0.0.1/1503435730489/Microsoft.VisualStudio.Services.Icons.Default" alt="typescript" />
                <p>Typescript</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://hackr.io/tutorials/learn-redis/logo/redis_logo?ver=1507562146" alt="redis" />
                <p>Redis (Caching)</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://cdn.iconscout.com/public/images/icon/premium/png-512/cyber-security-encryption-network-protection-smart-technology-3bd14d47ad627661-512x512.png" alt="Cyber security" />
                <p>Cyber security</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2000px-Amazon_Web_Services_Logo.svg.png" alt="AWS" />
                <p>Amazon Web Services</p>
              </Col>
              <Col className='Skill-box'><img className='Skill-icon-box' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/2000px-Tux.svg.png" alt="Linux" />
                <p>Linux (System Administration)</p>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>


  );
};

export default Skill;
