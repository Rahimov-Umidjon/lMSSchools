import React from 'react';
import {Col, Dropdown, Row, Card} from "react-bootstrap";
import {useSelector} from "react-redux";

function MyClass(props) {

    const user = useSelector(state => state.auth.user);

    return (
        <div className={'wrapper-right'}>
            <Row className="my-school m-0 mb-3 py-3 d-flex align-items-center ">
                <Col><h3>Mening sinfim</h3></Col>
                <Col className=" d-flex align-items-center justify-content-end">
                    <Dropdown className={'dropdown-content'}>
                        <Dropdown.Toggle
                            as={'button'}
                            className={'dropdown-content px-3 py-1 d-flex align-items-center justify-content-end '}
                            id="dropdown-basic">
                            <img
                                src="profile.png"
                                alt="User Avatar"
                                width="40"
                                height="40"
                                className="rounded-circle "
                            />
                            <div className="dropdown-text">
                                <p className={'m-0 p-0'}>{user ? user.username : ""}</p>
                                <p className={'m-0 p-0'}>{user ? user.email : ""}</p>
                            </div>
                            <img
                                className={'ms-3'}
                                src="bottom.png"
                                alt="bottom"
                                width="25"
                                height="25"
                            />
                        </Dropdown.Toggle>

                    </Dropdown>
                </Col>
            </Row>

            <Row className="m-0 mb-4 py-3 my-school d-flex px-3 ">

                <div className={'  p-0 d-flex align-items-center justify-content-between  '}>
                    <div className={'d-flex w-25 gap-3  '}>
                        <div className={'form-control  '}>7-B sinf</div>
                        <select name="quarter" id="quarter" className={'form-control  '}>
                            <option value="1">1-chorak</option>
                            <option value="2">2-chorak</option>
                            <option value="3">3-chorak</option>
                            <option value="4">4-chorak</option>
                        </select>
                    </div>
                    <input type="text" className={'form-control w-25'}/>


                    {/*<Card className={'p-0 border-0 m-0 w-25'}>*/}
                    {/*    <Col   className={'d-flex align-items-center justify-content-center   p-0 m-0'}>*/}
                    {/*<table className={'m-0 table table-bordered border-blue text-center table-border-radius '}>*/}
                    {/*    <tbody>*/}
                    {/*    <tr>*/}
                    {/*        <td className={'td-border'}>Darsni o'zlashtirish</td>*/}
                    {/*        <td className={'border-0'}>88%</td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                    {/*<input type="text"/>*/}
                    {/*    </Col>*/}
                    {/*</Card>*/}
                    {/*<Card className={'p-0 border-0 m-0 w-25'}>*/}
                    {/*    <Col   className={'d-flex align-items-center justify-content-center   p-0 m-0'}>*/}
                    {/*        <table className={'m-0 table table-bordered border-blue text-center table-border-radius '}>*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className={'td-border'}>Darsni o'zlashtirish</td>*/}
                    {/*                <td className={'border-0'}>88%</td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </Col>*/}
                    {/*</Card>*/}
                </div>


            </Row>
        </div>
    );
}

export default MyClass;