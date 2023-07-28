import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import "./traininglist.scss";
import Notiflix from 'notiflix';

const Traininglist = () => {
const [data, setData] = useState([]);

const confirmDelete = (id) => {
     
    Notiflix.Confirm.show(
      'Delete Worker in Training Data!!!',
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
   await deleteDoc(doc(db, "workertrainingslist", id));
   setData(data.filter(item=>item.id !== id))
  } catch(error) {
    console.log(error)
  }
  
}

useEffect(()=>{
// Listen Real-Time
const unsub = onSnapshot(collection(db, "workertrainingslist"), (snapShot) => {
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
    { field: "id", headerName: "ID", width: 120},
    { field: "name", headerName: "Name", width: 120 },
    { field: "surname", headerName: "Surname", width: 120 },
    { field: "email", headerName: "Email", width: 100},
    { field: "sex", headerName: "Sex", width: 90},
    { field: "maritalstatus", headerName: "MaritalStatus", width: 100},
    { field: "phonenumber", headerName: "PhoneNumber", width: 150},
    { field: "address", headerName: "Address", width: 150},
    
    
]

const rows = data.map((row) => ({
  id: row.id,
  name: row.name,
  surname: row.surname,
  email: row.email,
  sex: row.sex,
  maritalstatus: row.maritalstatus,
  phonenumber: row.phonenumber,
  address: row.address,
  
  
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

export default Traininglist;
