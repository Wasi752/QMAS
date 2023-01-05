import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function OldStudent({ id, roll, name, fname }) {
    return (
        <div>
            <table className="border-2 border-teal-500 w-full h-full">
                <tr>
                    <td className={design}>{id}</td>
                    <td className={design}>{roll}</td>
                    <td className={design}>{name}</td>
                    <td className={design}>{fname}</td>
                    <td className="border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-teal-500 text-lg hover:text-white">
                        <Link to={"/stdetails/" + roll}>Details</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

const design = 'border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-teal-500 text-lg';
const design2 = 'border-2 border-blue-500 w-2/12 h-2/6 py-4 font-bold text-teal-500 text-3xl';

function OldStudentList() {
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
                        <OldStudent
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
            <div className="w-2/12 h-full"></div>
            <div className="w-8/12 h-full">
                <h1 className="text-6xl font-bold text-teal-500 mt-[5%]">Student's Admision List</h1>
                <p className="text-teal-500 text-4xl font-bold mt-[3%]">Class : {jamat}</p>
                <table className="border-2 border-teal-500 mt-[4%] w-full h-full font-bold">
                    <tr>
                        <th className={design2}>Srl</th>
                        <th className={design2}>Roll</th>
                        <th className={design2}>Student's Name</th>
                        <th className={design2}>Father's Name</th>
                        <th className={design2}>Details</th>
                    </tr>
                </table>
                {student}
                <div className="py-[17%]"></div>
            </div>
            <div className="w-2/12 h-full"></div>
        </div>
    );
}
export default OldStudentList;

