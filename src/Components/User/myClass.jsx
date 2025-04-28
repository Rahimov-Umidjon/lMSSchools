import React, {useState} from 'react';
import {Col, Dropdown, Row, Card, Button} from "react-bootstrap";
import {useSelector} from "react-redux";

function MyClass(props) {

    const user = useSelector(state => state.auth.user);
    const [sciences , setSciences] = useState([
        "Ona tili va adabiyoti",
        "Chet tili",
        "Matematika",
        "Fizika",
        "Biologiya",
        "Tarix",
        "Geografiya",
        "Informatika va axborot texnologiyalari",
        "Tasviriy san’at va chizmachilik",
        "Musiqa madaniyati",
        "Jismoniy tarbiya",
        "Huquq asoslari  ",
        "Texnologiya  "
    ]);
    const [inputValue , setInputValue] = useState("");

    const  searchSciences =()=>{
        // const trSciences = document.getElementById("tr-sciences");
        for (let i = 0; i < sciences.length; i++) {
            if (sciences[i].toLowerCase().replace(/\s/g , '').includes(inputValue)) {
                console.log(inputValue);
                // trSciences.innerHTML = " "
                // const element = document.createElement("tr");
                // trSciences.append(element)
                return (
                    <tr id={'tr-science'} key={i} style={{verticalAlign: 'middle'}}>
                        <th style={{width: '1%', whiteSpace: 'nowrap'}} scope="row" className={'pe-3'}>{i + 1}
                        </th>
                        <td>{sciences[i]}</td>
                        <td>2024-2025</td>
                        <td>O'zbek tili</td>
                        <td style={{width: '1%', whiteSpace: 'nowrap'}}>
                            <Button variant={'outline-primary'}
                                    className={'btn-color d-inline-block '}>Batafsil</Button>
                        </td>
                    </tr>
                )
            }
        }
    }



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
                        <div className={'form-control border-blue '}>7-B sinf</div>
                        <select name="quarter" id="quarter" className={'form-control form-select border-blue'}>
                            <option value="1">1-chorak</option>
                            <option value="2">2-chorak</option>
                            <option value="3">3-chorak</option>
                            <option value="4">4-chorak</option>
                        </select>
                    </div>
                    <div className={'search'}>

                        <input onChange={(e)=> setInputValue(e.target.value)}  id={'search-input'} type="text" className={'form-control search-input border-blue'}/>
                        <img   src="./search.png" alt="dfv" className={'search-img'}/>
                    </div>
                </div>

                <div className={'mt-3 p-0 border '}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fanlar</th>
                            <th scope="col">O'quv yili</th>
                            <th scope="col">Ta'lim tili</th>
                            <th scope="col">Batfsil</th>
                        </tr>
                        </thead>
                        <tbody id={'tr-sciences'}>
                        {
                            searchSciences()
                        }
                        {
                            sciences.map((item, i) => (
                                <tr  key={i} style={{verticalAlign: 'middle'}}>
                                    <th style={{width: '1%', whiteSpace: 'nowrap'}} scope="row" className={'pe-3'}>{i + 1}
                                    </th>
                                    <td>{item}</td>
                                    <td>2024-2025</td>
                                    <td>O'zbek tili</td>
                                    <td style={{width: '1%', whiteSpace: 'nowrap'}}>
                                        <Button variant={'outline-primary'} className={'btn-color d-inline-block '}>Batafsil</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </Row>
        </div>
    );
}

export default MyClass;