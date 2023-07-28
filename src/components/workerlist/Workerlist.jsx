import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import "./workerlist.scss";
import Notiflix from 'notiflix';

const Workerlist = () => {
const [data, setData] = useState([]);

const confirmDelete = (id) => {
     
  Notiflix.Confirm.show(
    'Delete Worker Data!!!',
    'You are about to delete this data',
    'Delete',
    'Cancel',
    function okCb() {
      handleDelete(id);
    },
    function cancelCb() {
      console.log('Delete canceled');
    },
    {
      width: '320px',
      borderRadius: '3px',
      titleColor: "orangered",
      okButtonBackground: "orangered",
      cssAnimationStyle: "zoom"
      // etc...
    },
  );

};

const handleDelete = async(id)=> {
  try {
   await deleteDoc(doc(db, "workerslist", id));
   setData(data.filter(item=>item.id !== id))
  } catch(error) {
    console.log(error)
  }
  
}

useEffect(()=>{
// Listen Real-Time
const unsub = onSnapshot(collection(db, "workerslist"), (snapShot) => {
    let list =[];
    snapShot.docs.forEach((doc) => {
       list.push({id:doc.id, ...doc.data()}); 
    })
    setData(list)
},(error) => {
  console.log(error);
} 
);
return () => {
   unsub();
}
}, []);

console.log(data);

const columns = [
    { field: "id", headerName: "ID", width: 60},
    { field: "name", headerName: "Name", width: 110 },
    { field: "surname", headerName: "Surname", width: 100 },
    { field: "department", headerName: "Department", width: 100 },
    { field: "email", headerName: "Email", width: 150},
    { field: "sex", headerName: "Sex", width: 70},
    { field: "status", headerName: "Status", width: 70},
    { field: "phonenumber", headerName: "PhoneNumber", width: 120},
    { field: "address", headerName: "Address", width: 170},
    { field: "mob", headerName: "MOB", width: 100},
    
    
]

const rows = data.map((row) => ({
  id: row.id,
  name: row.name,
  surname: row.surname,
  department: row.department,
  email: row.email,
  sex: row.sex,
  status: row.status,
  phonenumber: row.phonenumber,
  address: row.address,
  mob: row.mob,
  
  
}))

const actionColumn = [
  {field: "action", headerName:"Action", width: 100, renderCell: (params) => {
    return (
    <div className='cellAction'>
     <div className='deleteButton' onClick={()=>confirmDelete(params.row.id) }>Delete</div>
    </div>
    );
  }},
];

  return (
    <div className='datatable' >
        <DataGrid
      
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
        
        pageSizeOptions={[8,10]}
        checkboxSelection
      />
      
    </div>
  );
}

export default Workerlist;
