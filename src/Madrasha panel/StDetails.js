import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StDetails({ id, name, fname, dateOfBirth, vill, post, thana, jela, image, mobile, email, exdakhal }) {
    const c = "text-2xl text-teal-500 text-left mt-3";
    return (
        <div className="w-full h-full">
            <div className="w-full h-full"></div>
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-full h-full">
                    <p className={c}>Rool : {id}</p>
                    <p className={c}>Name : {name}</p>
                    <p className={c}>Father Name : {fname}</p>
                    <p className={c}>Date of birth : {dateOfBirth}</p>
                    <p className={c}>Village : {vill}</p>
                    <p className={c}>Post : {post}</p>
                    <p className={c}>Thana : {thana}</p>
                    <p className={c}>Jela : {jela}</p>
                    <p className={c}>Mobile : {mobile}</p>
                    <p className={c}>Email : {email}</p>
                    <p className={c}>Ex-Dakhal No : {exdakhal}</p>
                </div>
                <div className="flex flex-col w-full h-full">
                    <p className='text-2xl text-teal-500'>Aplicant Image<img src={image} className="ml-[33%] w-4/12 h-2/6 mt-7" /></p>
                </div>
            </div>
            <div className="w-full h-full"></div>
        </div>
    );
}

function StDetailsList() {
    const { menu } = useParams();
    const rollNo = parseInt(menu);
    const [student, setStudent] = useState("");
    useEffect(() => {
        fetch('http://localhost:3001/results')
            .then((response) => response.json())
            .then((data) => {
                const a = data.filter((d) => d.roll === rollNo)[0];
                setStudent(
                    <StDetails
                        id={a.roll}
                        name={a.name}
                        fname={a.fname}
                        dateOfBirth={a.dateOfBirth}
                        vill={a.vill}
                        post={a.post}
                        thana={a.thana}
                        jela={a.jela}
                        image={a.image}
                        mobile={a.mobile}
                        email={a.email}
                        exdakhal={a.exdakhal}
                    />
                )
            });
    }, [rollNo]);

    return (
        <div className="flex w-screen h-screen bg-gray-900">
            <div className="w-2/12 h-full"></div>
            <div className="w-8/12 h-full">
                <div className='bg-gray-800 flex flex-col justify-center px-[5%] py-[5%] mt-[6%]'>
                    <p className="text-4xl text-teal-500 font-bold">ADMIN PAGE</p>
                    <p className="mt-[5%]">{student}</p>
                    <div className="flex flex-row">
                        <button
                            type="button"
                            onClick={() => alert("Allow")}
                            className='mt-11 ml-[30%] w-2/12 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >Allow
                        </button>
                        <button
                            type="button"
                            onClick={() => alert("Cencel")}
                            className='mt-11 ml-[8%] w-2/12 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >Cencel
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-2/12 h-full"></div>
        </div>
    );
}
export default StDetailsList;






