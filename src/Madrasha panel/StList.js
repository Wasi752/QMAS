import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AllowStudent({ id, roll, name, fname }) {
    return (
        <div>
            <table className="border-2 border-teal-500 w-full h-full">
                <tr>
                    <td className={design}>{id}</td>
                    <td className={design}>{roll}</td>
                    <td className={design}>{name}</td>
                    <td className={design}>{fname}</td>
                    <td className="border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-teal-500 text-lg hover:text-white">
                        <Link to={"/stlist/" + roll}>Payment</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

const design = 'border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-teal-500 text-lg';
const design2 = 'border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-teal-500 text-3xl';

function AllowStudentList() {
    const [student, setStudent] = useState("");
    const [jamat, setJamat] = useState();
    const { menu } = useParams();
    const jcode = parseInt(menu);

    useEffect(() => {
        fetch('http://localhost:3001/results')
            .then((response) => response.json())
            .then((data) => {
                const a = data.filter((x) => x.jamat === jcode)
                    .map((d, i) =>
                        <AllowStudent
                            id={i + 1}
                            roll={d.roll}
                            name={d.name}
                            fname={d.fname}
                        />
                    )
                setStudent(a);
                const n = data.filter((f) => f.jamat === jcode)
                    .map(x => x.jName);
                setJamat(n[0]);
            });
    }, [jcode]);
    return (
        <div className="flex w-full h-full bg-gray-800">
            <div className="w-1/12 h-full"></div>
            <div className="w-10/12 h-full">
                <h1 className="text-5xl font-bold text-teal-500 mt-[4%]">Student's Admision List</h1>
                <p className="text-teal-500 text-3xl font-bold mt-[2%]">Class : {jamat}</p>
                <table className="border-2 border-teal-500 mt-[3%] w-full h-full font-bold">
                    <tr>
                        <th className={design2}>Srl</th>
                        <th className={design2}>Roll</th>
                        <th className={design2}>Student's Name</th>
                        <th className={design2}>Father's Name</th>
                        <th className={design2}>Details</th>
                    </tr>
                </table>
                {student}
                <div className="py-[2%]"></div>
            </div>
            <div className="w-1/12 h-full"></div>
        </div>
    );
}


function StList() {
    const [show, setShow] = useState(false);
    const q = 'w-8/12 ml-4 hover:bg-teal-500 hover:text-white text-lg font-bold text-teal-500 mt-7 text-center border-2 border-blue-500 py-2 rounded-2xl';
    return (
        <div className='flex w-screen h-screen bg-gray-900'>
            <div className='flex flex-col w-2/12 h-full bg-gray-800'>
                <Link to={'/stlist/' + 101}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className='w-8/12 hover:bg-teal-500 hover:text-white ml-4 text-lg font-bold 
                    text-teal-500 mt-[27%] text-center border-2 border-blue-500 py-2 rounded-2xl'
                    >Taisir
                    </button>
                </Link>
                <Link to={'/stlist/' + 102}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Mizan
                    </button>
                </Link>
                <Link to={'/stlist/' + 103}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Nahubamir
                    </button>
                </Link>
                <Link to={'/stlist/' + 104}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Hiadayatunnahu
                    </button>
                </Link>
                <Link to={'/stlist/' + 105}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Kafia
                    </button>
                </Link>
                <Link to={'/stlist/' + 106}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Shorhul Bakaya
                    </button>
                </Link>
                <Link to={'/stlist/' + 107}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Shorhul Jami
                    </button>
                </Link>
                <Link to={'/stlist/' + 108}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Jalalain
                    </button>
                </Link>
                <Link to={'/stlist/' + 109}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Mishkat
                    </button>
                </Link>
                <Link to={'/stlist/' + 110}>
                    <button
                        type='button'
                        onClick={() => setShow(<AllowStudentList />)}
                        className={q}
                    >Doarhadis
                    </button>
                </Link>
            </div>
            <div className='w-10/12 h-full'>
                <div className='mt-[3%] ml-[20%]'>
                    {show}
                </div>
            </div>
            <div className='w-2/12 h-full'></div>
        </div>
    );
}
export default StList;
