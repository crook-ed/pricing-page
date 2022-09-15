
import { Image, Button, Card, Col, Row } from "antd";

import green from '../images/green.svg';
import rectangle from '../images/rectangle.svg';
import bolt from '../images/bolt.svg';


const content = () => {
    return(
        <>
            {/* Heading line */}
            <div >
                <div style={{textAlign: 'center', paddingTop: '60px'}} >
                    <h1 style={{margin: 'auto'}}>Utterly <span style={{color: 'blue'}}>transparent pricing,</span> for businesses of all sizes.</h1>
                    <p style= {{fontWeight: '400', fontSize: '24px', color:'#706F6F'}}>Usage-based pricing with monthly payments</p>
                </div>
            {/* Cards  */}
                <div style={{width: '60%', margin: 'auto'}}>
                    <Row >
                        {/* Card 1 */}
                        <Col span={8} style={{paddingTop: '20px'}} >
                            
                            <Card style= {{height:'190px', boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)'}} >
                            
                                    <div style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <div ><span style= {{fontWeight: '500' , fontSize: '22px' }}>Free Tier</span></div>
                                    <div><span style= {{fontWeight: '400' , fontSize: '16px' }}>Up to</span> <span style= {{fontWeight: '500' , fontSize: '22px' }}>2000</span><span style= {{fontWeight: '400' , fontSize: '16px' }}> checks per month</span></div>
                                    </div>
                                    
                                    
                                
                            </Card>
                        </Col>

                        {/* Card 2 */}

                        <Col span={8} >
                            <Card style= {{height:'230px'   , boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)', background:'#1169F9'}}  >
                            <div style={{textAlign: 'center', paddingTop: '20px',marginTop:'25px', color:'white'}}>
                                    <div ><span style= {{fontWeight: '500' , fontSize: '22px' }}>Fixed price per month</span></div>
                                    <div><span style= {{fontWeight: '400' , fontSize: '16px' }}>Starts from</span> <span style= {{fontWeight: '500' , fontSize: '22px' }}>$500</span></div>
                                </div>
                            </Card>
                        </Col>

                        {/* Card 3 */}
                        
                        <Col span={8} style={{paddingTop: '20px'}} >
                            <Card style= {{height:'190px', boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)'}}>
                            <div style={{textAlign: 'center', paddingTop: '20px'}}>
                                    <div ><span style= {{fontWeight: '500' , fontSize: '22px' }}>Annual payment with<br></br> 25% off</span></div>
                                    <div><span style= {{fontWeight: '400' , fontSize: '16px' }}>Starts from </span><span style= {{fontWeight: '500' , fontSize: '22px' }}>$4,500</span></div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

               {/* Key points of flagright api  */}
                <div>
                    <div style={{maxWidth: '860px', margin: 'auto', marginTop: '50px'}}>
                        <Row >
                            <Col span={13} style={{paddingLeft: '50px'}}>
                                {/* Row 1 */}
                                 <Row>
                                    <Col span={2} style={{float: 'right'}}>
                                        <Image src={green} preview={false} height={20}/>
                                    </Col>
                                    <Col >
                                        <div > <span style= {{fontWeight: '500' , fontSize: '16px' }}>Case management</span><br></br>
                                        <span style= {{fontWeight: '400' , fontSize: '14px' }}>Centralize your compliance & fraud prevention<br></br> operations in a single investigation tool.</span> </div>
                                    </Col>
                                    
                                </Row>
                                {/* Row 2 */}
                                <Row>
                                    <Col span={2} style={{float: 'right'}}>
                                        <Image src={green} preview={false} height={20}/>
                                    </Col>
                                    <Col >
                                        <div > <span style= {{fontWeight: '500' , fontSize: '16px' }}>No code</span><br></br>
                                        <span style= {{fontWeight: '400' , fontSize: '14px' }}>It's 70% faster to integrate the Flagright API<br></br> compared to market benchmark of 2-4 months</span> </div>
                                    </Col>
                                    
                                </Row>
                                {/* Row 3 */}
                                <Row>
                                    <Col span={2} style={{float: 'right'}}>
                                        <Image src={green} preview={false} height={20}/>
                                    </Col>
                                    <Col >
                                        <div > <span style= {{fontWeight: '500' , fontSize: '16px' }}>Unlimited number of seats on console</span><br></br>
                                        <span style= {{fontWeight: '400' , fontSize: '14px' }}>Add as many team members as you like with no<br></br> additional cost.</span> </div>
                                    </Col>
                                    
                                </Row>
                                {/* Row 4 */}
                                <Row>
                                    <Col span={2} style={{float: 'right'}}>
                                        <Image src={green} preview={false} height={20}/>
                                    </Col>
                                    <Col >
                                        <div > <span style= {{fontWeight: '500' , fontSize: '16px' }}>Super-fast integration time</span><br></br>
                                        <span style= {{fontWeight: '400' , fontSize: '14px' }}>No setup, integration, or implementation fees.<br></br> All training, support, and services are included in the<br></br> price you see.</span> </div>
                                    </Col>
                                </Row>
                                {/* Row 5 */}
                                 <Row>
                                    <Col span={2} style={{float: 'right'}}>
                                        <Image src={green} preview={false} height={20}/>
                                    </Col>
                                    <Col >
                                        <div > <span style= {{fontWeight: '500' , fontSize: '16px' }}>Rule configuration</span><br></br>
                                        <span style= {{fontWeight: '400' , fontSize: '14px' }}>Add as many team members as you like with no<br></br> additional cost.</span> </div>
                                    </Col>
                                    
                                </Row>
                                {/* Row 6 */}
                                <Row>
                                    <Col span={2} style={{float: 'right'}}>
                                        <Image src={green} preview={false} height={20}/>
                                    </Col>
                                    <Col >
                                        <div > <span style= {{fontWeight: '500' , fontSize: '16px' }}>No integration or implementation fees</span><br></br></div>
                                    </Col>
                                    </Row>

                            </Col>
                            <Col span={11}>
                                <Image src={rectangle} preview={false} height={350} style={{padding: '20px' , width:'550'}}/>
                                
                            </Col>
                        </Row>
                           
                    </div>
                </div>

                {/* Footer */}

                <div style= {{ marginTop: '60px' , textAlign:'center' , background: '#0D254B', padding:'50px'}}>
                <Image src={bolt} preview={false} style={{marginTop:'20px' ,}} />
                <div style= {{fontWeight: '400', fontSize: '26px' , color:'#FFFFFF'}}>  
                All inclusive, unlimited support & training
                </div>
                <div style= {{marginTop: '10px'}}>
                <Button type="primary"  >Request Demo</Button>
                </div>

                </div >
            </div>
        </>
    )
}

export default content;
