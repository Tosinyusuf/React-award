// import React, { useState, useEffect} from 'react';
// import Resultbox from './Resultbox';
// import './Middle.css';



// const productsss = [
//     {
//         id:1,
//         cat:'Beauty-Health',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/46e5d73f-bcdd-42cf-8ec4-9e13c808a075.jpg',
//         title:'aloe lipstick & balm',
//         delivery:  44000,
//         price: 20000,
//     },

//     {
//         id:2,
//         cat:'Beauty-Health',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/fca016b4-e42e-4080-bc28-3eb977152777.jpg',
//         title:'fruit sea salt scrub',
//         price: 30000,
//         delivery: 44000 
//     },
//     {
//         id:3,
//         cat:'Beauty-Health',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/76338984-1e1f-4e83-9801-060ff8db2990.jpg',
//         title:'brightening scrub',
//         price: 30000,
//         delivery: 44000
//     },
//     {
//         id:4,
//         cat:'men-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/5db7c954-da22-4273-b5c1-31d752e8e5e8.jpg',
//         title:'steppers',
//         price: 140000,
//         delivery: 44000, 
//     },
//     {
//         id:5,
//         cat:'men-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/fab50b0f-ceaf-41d1-a0de-0f1b36519209.jpg',
//         title:'mens leather shoe',
//         price: 74000,
//         delivery: 44000, 
//     },
//     {
//         id:6,
//         cat:'men-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/46e5d73f-bcdd-42cf-8ec4-9e13c808a075.jpg',
//         title:'sneakers shoe',
//         price: 140000,
//         delivery: 44000, 
//     },
//     {
//         id:7,
//         cat:'men-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/d50f8e75-8d51-45ed-8069-af4cd99df0ab.jpg',
//         title:'labelmans sneakers',
//         price: 140000,
//         delivery: 44000, 
//     },
//     {
//         id:8,
//         cat:'women-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/ee5c71cc-8738-46ee-b519-d7b2091df557.jpg',
//         title:'open toe stilleto',
//         price: 40000,
//         delivery: 44000, 
//     },
//     {
//         id:9,
//         cat:'women-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/335959de-17ab-4749-b7a5-2c90da3002f1.jpg',
//         title:'candy colour sandals',
//         price: 29000,
//         delivery: 44000, 
//     },
//     {
//         id:10,
//         cat:'women-shoes',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/b01fc8e2-c76d-47a1-9efb-44aeeaf9754b.jpg',
//         title:'big butterfly stilet',
//         price: 40000,
//         delivery: 44000, 
//     },
//     {
//         id:11,
//         cat:'women-accesories',
//         img:'https://soko.fra1.digitaloceanspaces.com/TestImg/1371a28c-02a4-4daf-a318-9379c8e0435e.jpg',
//         title:'bangle',
//         price: 7000,
//         delivery: 44000, 
//     },
//     {
//         id:12,
//         cat:'women-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/0d846aa0-cf0a-417f-91ef-f8d195dab1fd.jpg',
//         title:'arabic bangle',
//         price: 4000,
//         delivery: 44000, 
//     },
//     {
//         id:13,
//         cat:'women-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/4149c4e6-93cf-469e-b76e-655dfcc65264.jpg',
//         title:'pearl headband',
//         price: 15000,
//         delivery: 44000, 
//     },
//     {
//         id:14,
//         cat:'women-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/fa77335e-cb02-42a0-8d11-2ce849720f6f.jpg',
//         title:'necklace & ear rings',
//         price: 30000,
//         delivery: 44000, 
//     },
//     {
//         id:15,
//         cat:'men-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/30bfeedd-56bb-4af0-95d4-295a9404cb23.jpg',
//         title:'quartz wrist watch',
//         price: 10000,
//         delivery: 44000, 
//     },
//     {
//         id:16,
//         cat:'men-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/12d0f08c-ba0c-47d7-9eff-5518bab8c1a8.jpg',
//         title:'leather wallet',
//         price: 30000,
//         delivery: 44000, 
//     },
//     {
//         id:17,
//         cat:'men-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/d4f3afb9-87f5-4f62-9b97-0ff11bd3aba5.jpg',
//         title:'pendants',
//         price: 10000,
//         delivery: 44000, 
//     },
//     {
//         id:18,
//         cat:'men-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/312f15d0-c789-441f-a2aa-2acab19dc3e8.jpg',
//         title:'curren 8329 watches',
//         price: 70000,
//         delivery: 44000, 
//     },
//     {
//         id:19,
//         cat:'men-accesories',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/dee2a193-e028-4e2e-9fa8-697a3a8fbc53.jpg',
//         title:'luminous bracelets',
//         price: 30000,
//         delivery: 44000, 
//     },
//     {
//         id:20,
//         cat:'Bags',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/085451fc-f925-432c-885a-67a772be67b5.jpg',
//         title:'graffiti pearl bag',
//         price: 80000,
//         delivery: 44000,
//     },
//     {
//         id:21,
//         cat:'Bags',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/d7f85a1b-46e5-4d7f-8dd8-8f0522213178.jpg',
//         title:'pink bag',
//         price: 18000,
//         delivery: 44000, 
//     },
//     {
//         id:22,
//         cat:'Bags',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/5e4c0f63-74b3-4a4d-b3f2-d8420dde6c25.jpg',
//         title:'Women Handbag',
//         price: 100000,
//         delivery: 44000, 
//     },
//     {
//         id:23,
//         cat:'Bags',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/46e5d73f-bcdd-42cf-8ec4-9e13c808a075.jpg',
//         title:'purse bags',
//         price: 10000,
//         delivery: 44000, 
//     },
//     {
//         id:24,
//         cat:'Bags',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/8bd67a58-6137-4743-a07a-08a030bc3cfc.jpg',
//         title:'classic milk',
//         price: 70000,
//         delivery: 44000, 
//     },
//     {
//         id:25,
//         cat:'Bags',
//         img: 'https://soko.fra1.digitaloceanspaces.com/TestImg/92b522c7-4633-4de1-83c4-42fb4505e2a5.jpg',
//         title:'leathery bag',
//         price: 71000,
//         delivery: 44000, 
//     },
// ];

// function Middle()  {
//     const [searching, setSearching] = useState(false);
//
//     const [data,setData]=useState([]);
//    

    
//     // const SearchMovies =  (e) =>{
//     //     e.preventDefault();
//     //     setSearching(true);

//     const SearchMovies =  (e) =>{
//         e.preventDefault();
//         setSearching(true);
//             const results = productsss.filter(productss =>
//                 productss.title===query
//                 );
//                 setData(results)
//                 console.log(data)
//                 setMessage(null)
//                 if(!data.length) {
//                     setSearching(false)
//                     setMessage(<div><span className="nos">No result for products...</span><span className="click">pls review categories to see products</span></div>)
//                 }
               
                
//         }

//     return (
//         <div className="container middle">
//             <div></div>
//             <div className="inputwrapper">
//                 <form onSubmit={SearchMovies}>
//                     <input type="text"
//                         placeholder="Search for products..."
//                         value={query}
//                         onChange={(e) =>setQuery(e.target.value)}
//                     />
//                     <button type="submit" className='searchicon'>
//                         <i className="fas fa-search se"></i>
//                     </button>
//                 </form>
//             </div>
            
//             {searching ?(  <ul className="results">
//                                     {data.map((products, index) =>(
//                                         <li key={index}>
//                                             <Resultbox products={products}/>
//                                         </li>
            
//                                     ))}
//                                 </ul>): (<div className="noresult">{message}</div>
//                                 //  <span> loading... </span>  
//                     )}
//                     {/* {searching && (
//                                 <ul className="results">
//                                     {data.map((products, index) =>(
//                                         <li key={index}>
//                                             <Resultbox products={products}/>
//                                         </li>
            
//                                     ))}
//                                 </ul>
//                     )}   
//                     */}
//         </div>
//     )
// }

// export default Middle;
