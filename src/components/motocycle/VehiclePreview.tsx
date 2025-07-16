import { Col, Row } from "react-bootstrap";
import type { Moto } from "../../model/MotoModel";
import './VehiclePreview.css'

const VehiclePreview = ({ moto }: { moto: Moto | null }) => {
    return (
        <>
            {moto != null && (
                <>
                {(moto.limit || moto.new) && (
                    <div className={`${moto.limit ? 'limit' : 'new'}`}>
                        {moto.limit ? 'Limited Edion' : 'New'}
                    </div>
                )}
                    <img style={{ width: "100%" }} src={moto.image} />

                    <Row>
                        <Col md={7}>
                            <img style={{marginLeft: "100px", width: "200px"}} src={moto.logoImage}/>
                        </Col>
                        <Col md={4} className="d-flex justify-content-between ms-5">
                            <div className="item text-left">
                                <span className="main-content">{moto.cylinders}</span>
                                <div className="sub-content">
                                    Cylinders
                                </div>
                            </div>
                            <div className="item text-left">
                                <span className="main-content">{moto.capacity}</span>
                                <span className="note">CC</span>
                                <div className="sub-content">
                                    Capacity
                                </div>
                            </div>
                            <div className="item horsepower text-left">
                                <span className="main-content">{moto.horsePower}</span>
                                <span className="note">HP</span>
                                <div className="sub-content">
                                    Horsepower
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default VehiclePreview