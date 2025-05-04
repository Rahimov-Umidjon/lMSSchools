// import React, {useState} from 'react';
// import {Button} from "react-bootstrap";
//
// function Search(props) {
//     const [sciences , setSciences] = useState([
//         "Ona tili va adabiyoti",
//         "Chet tili",
//         "Matematika",
//         "Fizika",
//         "Biologiya",
//         "Tarix",
//         "Geografiya",
//         "Informatika va axborot texnologiyalari",
//         "Tasviriy san’at va chizmachilik",
//         "Musiqa madaniyati",
//         "Jismoniy tarbiya",
//         "Huquq asoslari",
//         "Texnologiya"
//     ]);
//     const [inputValue , setInputValue] = useState("");
//
//     const  searchSciences =()=>{
//
//         for (let i = 0; i < sciences.length; i++) {
//             if (sciences[i].toLowerCase().replace(/\s/g , '').includes(inputValue)) {
//                 console.log(inputValue);
//
//                 return (
//                     <tr id={'tr-science'} key={i} style={{verticalAlign: 'middle'}}>
//                         <th style={{width: '1%', whiteSpace: 'nowrap'}} scope="row" className={'pe-3'}>{i + 1}
//                         </th>
//                         <td>{sciences[i]}</td>
//                         <td>2024-2025</td>
//                         <td>O'zbek tili</td>
//                         <td style={{width: '1%', whiteSpace: 'nowrap'}}>
//                             <Button variant={'outline-primary'}
//                                     className={'btn-color d-inline-block '}>Batafsil</Button>
//                         </td>
//                     </tr>
//                 )
//             }
//         }
//     }
//     return (
//         <div>
//
//         </div>
//     );
// }
//
// export default Search;
