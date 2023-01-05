import { useState } from "react";
import { Link } from "react-router-dom";

const students = [{
    title: 'পুরাতন ছাত্র ',
    imge: '/student/oldstudent.png',
    link: '/oldstudent'
},
{
    title: 'নতুন ছাত্র ',
    imge: '/student/newstudent.png',
    link: '/oldstudent'
}
]
const imgtext = "w-4/12 ml-20 mr-20 px-1 text-xl scale-75 shadow-lg rounded-full max-w-full h-4/6 bg-purple-300 "
function Madrasapage1() {
    const [student, setStudent] = useState("");
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-full bg-gray-800 flex">
                <div className="w-[10%] h-full"></div>
                <div className="w-[80%] h-[80%] bg-gray-400 mt-10 rounded-md shadow-white">
                    <span className="text-4xl font-basic underline"> জামিয়া শারইয়্যাহ মালিবাগ,ঢাকা </span>
                    <div className="w-full h-full mt-10">
                        {students.map(({ title, imge, link }) => (
                            <Link to={link}>
                                <button className={imgtext}                               
                                    onClick={() => setStudent(student)} >
                                         <span className="mr-8 mt-4 text-3xl text-orange-600 ml-6 font-mono">{title}</span>
                                    <img src={imge} alt={title} className="w-8/12 ml-16"></img>                                
                                </button></Link>
                        ))};
                    </div>
                </div>
                <div className="w-[10%] h-full"></div>
            </div>
        </div>
    );
}
export default Madrasapage1;