import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

const MyListPage = () => {
    const {user} = useContext(AuthContext);
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetch(`https://explore-southeast-aisa-server.vercel.app/touristSpot/${user?.email}`)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setMyList(data);
        })
    },[user])

    const newMyList = myList.filter(spot => user.email === spot.userEmail);
    // console.log(newMyList)

    // Handle Spot Delete
    const handleTouristSpotDelete = (id) =>{
        // console.log('Deleted id: ',id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://explore-southeast-aisa-server.vercel.app/deleteSpot/${id}`,{
                method: 'DELETE',
              })
                .then(res => res.json())
                .then(data =>{
                    // alert(data.deletedCount);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your tourist spot has been deleted.",
                            icon: "success"
                        });
                        location.reload()
                    }
                    // console.log(data);
                })
            }
        });
    }

    return (
        <div className="mx-auto mt-5 min-h-screen">
            <Helmet>
                <title>My Spot List</title>
            </Helmet>
            <table className="table border  border-collapse border-slate-400">
                <thead className="text-base">
                    <th className="border border-slate-300">ID</th>
                    <th className="border border-slate-300">Spot Name</th>
                    <th className="border border-slate-300">Country</th>
                    <th className="border border-slate-300">Ave. Cost</th>
                    <th className="border border-slate-300">Action</th>
                </thead>

                <tbody>
                    {
                        newMyList.map((list, index) => (
                            
                            <tr key={index} className="">
                                <td className="border border-slate-300">{index+1}</td>
                                <td className="border border-slate-300">{list.spot}</td>
                                <td className="border border-slate-300">{list.country}</td>
                                <td className="border border-slate-300">${parseInt(list.cost)-1000}</td>
                                <td className="md:flex gap-1 space-y-1 md:space-y-0 border border-slate-300">
                                    <Link to={`/updated/page/${list._id}`}>
                                        <button className="btn btn-sm btn-outline">
                                            <AiOutlineEdit />
                                        </button>
                                    </Link>

                                    <button onClick={() => handleTouristSpotDelete(list._id)} className="btn btn-outline btn-sm text-red-500 text-lg"><MdDeleteForever /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ScrollToTop />
        </div>
    );
};

export default MyListPage;