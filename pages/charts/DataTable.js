import React, { useRef,useEffect, useState } from 'react'
import './DataTable.css'

const DataTable = () => {

const [formData, setFormData]=useState({item:"",cost:"",type:"",expiration:""})
const[data, setData] = useState([])
const[editId, setEditId]=useState(false)
const[searchTerm,setSearchTerm]=useState('')
const [currentPage,setCurrentPage]=useState(1)
const outsideClick=useRef(false)
const itemsPerPage=10
const LastItem=currentPage*itemsPerPage
const indexOfFirstItem=LastItem-itemsPerPage


let filteredItems=data.filter((item)=>
  item.item.toLowerCase().includes(searchTerm.toLowerCase())
)
let filteredData=filteredItems.slice(indexOfFirstItem,LastItem)
useEffect(()=>{
  setCurrentPage(1)
},[searchTerm])

useEffect(()=>{
  if(!editId) return;
  let selectedItem=document.querySelectorAll(`[id='${editId}']`)
  selectedItem[0].focus()
},[editId])

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      outsideClick.current &&
      !outsideClick.current.contains(event.target)
    ) {
      setEditId(false);
    }
  };
  document.addEventListener("click", handleClickOutside, true);
  return () => {
    document.removeEventListener("click", handleClickOutside, true);
  };
}, []);

  const handleInputChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})

  }

  const handleAddClick=()=>{
    if(formData.item && formData.cost /*&& formData.type*/ && formData.expiration){
      const newItem={
        id: Date.now(),
        item:formData.item,
        cost: formData.cost,
        /*type:formData.type,*/
        expiration:formData.expiration,
      }
      setData([...data, newItem])
      setFormData({item:'',cost:'',type:'',expiration:''})
    }
  }

  const handleDelete=(id)=>{
    if(filteredData.length===1 && currentPage !==1){
      setCurrentPage((prev)=>prev-1)
    }

    const updatedList=data.filter((item)=>item.id !==id)
    setData(updatedList)
  }

  const handleEdit=(id,updatedData)=>{
    if(!editId || editId !==id){
      return
    }
    const updatedList=data.map((item)=>
       item.id ===id ? {...item, ...updatedData}:item)

    setData(updatedList)
  }

  const handleSearch=(e)=>{
    setSearchTerm(e.target.value)
  }
  
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  
  return (
    <div className='container'>
      <div className='add-container'>
        <div className='info-container'>
            <input
            type='text'
            placeholder='Item'
            name='item'
            value={formData.item}
            onChange={handleInputChange}>
            </input>
            <input
            type='text'
            placeholder='Cost'
            name='cost'
            value={formData.cost}
            onChange={handleInputChange}>
            </input>
            {/*<input
            type='text'
            placeholder='Meal Type'
            name='type'
            value={formData.type}
            
            onChange={handleInputChange}>
            </input>*/}
            <input
            type='text'
            placeholder='Expiration Date'
            name='expiration'
            value={formData.expiration}
            onChange={handleInputChange}>
            </input>
            
        </div>
        <button className='add' onClick={handleAddClick}>ADD</button>
      </div>
      <div className='search-table-container'>
      <input
            type='text'
            placeholder='Search by Item'
            value={searchTerm}
            onChange={handleSearch}
            className='search-input'>
            </input>

        <table ref={outsideClick}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Cost</th>
                    <th className='type'>Meal Type</th>
                    <th>Expiration Date</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
              {
                filteredData.map((item)=>(
                  <tr key={item.id}>
                      <td id={item.id}
                       contentEditable={editId===item.id}
                       onBlur={(e)=>handleEdit(item.id,{item: e.target.innerText})
                       }
                       >{item.item}
                        </td>
                      <td id={item.id} contentEditable={editId===item.id}
                      onBlur={(e)=>handleEdit(item.id,{item: e.target.innerText})
                    }>${item.cost}</td>

                      <td /*id={item.id} contentEditable={editId===item.id}
                       onBlur={(e)=>handleEdit(item.id,{item: e.target.innerText})
                      }>{item.type}*/><select name="cars" id="cars">
          <option value="protein">Protein</option>
          <option value="veggie">Veggie</option>
          <option value="fruit">Fruit</option>
          <option value="drink">Drink</option>
          <option value="snack">Snack</option>
          <option value="sweets">Sweet</option>
          <option value="starch">Starch</option>
        </select></td>
                      
                      <td id={item.id} contentEditable={editId===item.id}
                       onBlur={(e)=>handleEdit(item.id,{item: e.target.innerText})
                      }>{item.expiration}</td>
                      
                      <td className='actions'>
                        <button className='edit' onClick={()=>setEditId(item.id)}>Edit</button>
                        <button className='delete' 
                        onClick={()=>handleDelete(item.id)}>Delete</button>

              </td>

                  </tr>
                ))
              }
              {/**/}
            </tbody>
        </table>
        <div className='pagination'>
          {Array.from(
            {length:Math.ceil(filteredItems.length/itemsPerPage)},(_,index)=>(
              <button key={index+1} 
              style={
                {backgroundColor:currentPage ===index+1 && 'lightgreen',}}
              onClick={()=>paginate(index+1)}
                
              >
                    {index+1}
              </button>
            ))}
          
        </div>
      </div>
    </div>
  )
}

export default DataTable
