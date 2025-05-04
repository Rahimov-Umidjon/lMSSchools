import React from 'react';
import {Button, Col, Dropdown, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

function LessonPlan(props) {

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

                {/*<div className={'  p-0 d-flex align-items-center justify-content-between  '}>*/}
                {/*    <div className={'d-flex w-25 gap-3  '}>*/}
                {/*        <div className={'form-control border-blue '}>7-B sinf</div>*/}
                {/*        <select name="quarter" id="quarter" className={'form-control form-select border-blue'}>*/}
                {/*            <option value="1">1-chorak</option>*/}
                {/*            <option value="2">2-chorak</option>*/}
                {/*            <option value="3">3-chorak</option>*/}
                {/*            <option value="4">4-chorak</option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    <div className={'search'}>*/}
                {/*        <input id={'search-input'} type="text" className={'form-control search-input border-blue'}/>*/}
                {/*        <img src="./search.png" alt="dfv" className={'search-img'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={'mt-3 p-0 border '}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mavzular</th>
                            <th scope="col">Sana</th>
                            <th scope="col">Yuklab olish</th>
                        </tr>
                        </thead>
                        <tbody id={'tr-sciences'}>




                        <tr style={{verticalAlign: 'middle'}}>
                            <th style={{width: '1%', whiteSpace: 'nowrap'}} scope="row"
                                className={'pe-3'}>
                                1
                            </th>
                            <td>item</td>
                            <td style={{width:'30%'}}  >22.04.2025</td>
                            {/*<td>O'zbek tili</td>*/}
                            <td style={{width: '1%', whiteSpace: 'nowrap'}}>
                                <Button variant={'outline-primary'}
                                        className={'btn-color d-inline-block '}>yuklab olish</Button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </Row>
        </div>
    );
}

export default LessonPlan;