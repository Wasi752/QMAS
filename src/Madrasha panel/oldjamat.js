import { useState } from "react";
import { Link } from "react-router-dom";

const text = "w-[45%] ml-20 text-xl p-2 flex text-start ml-80 mt-3"
const jamat1 = [
    {
        title: 'Jamaat-e Taisir',
        link: '/oldstudent/' + 101
    },
    {
        title: 'Jamaat-e Mizan',
        link: '/oldstudent/' + 102
    },
    {
        title: 'Jamaat-e Nahbemir',
        link: '/oldstudent/' + 103
    },
    {
        title: 'Jamaat-e Hedayetun-nahu',
        link: '/oldstudent/' + 104
    },
    {
        title: 'Jamaat-e Kafia',
        link: '/oldstudent/' + 105
    },
    {
        title: 'Jamaat-e Sharhe wikaya',
        link: '/oldstudent/' + 106
    },
    {
        title: 'Jamaat-e Hidaya',
        link: '/oldstudent/' + 107
    },
    {
        title: 'Jamaat-e Jalaline',
        link: '/oldstudent/' + 108
    },
    {
        title: 'Jamaat-e Meshkat',
        link: '/oldstudent/' + 109
    },
    {
        title: 'Darul Hadith',
        link: '/oldstudent/' + 110
    }]

function Oldjamat() {
    const [jamat, setJamat] = useState("");
    return (
        <div className="w-scree h-screen flex">
            <div className="w-[15%] h-full"></div>
            <div className="w-full h-full">
                <div className="w-full h-[20%] bg-slate-300 mt-2">
                    <span className="text-3xl text-mono">Admission of Jamat </span>
                </div>
                {jamat1.map(({ title, link }) => (
                    <Link to={link}>
                        <button className={text}
                            onClick={() => setJamat()} >
                            <span className="mr-8 ml-5 text-2xl hover:text-blue-600 font-mono border-2 border-black bg-gray-300 rounded-md">{title}</span>
                        </button></Link>))}
            </div>
            <div className="w-[15%] h-full"></div>
        </div>
    );
}
export default Oldjamat;