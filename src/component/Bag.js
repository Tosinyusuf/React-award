import React, { useContext } from 'react';
import './Bag.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Cal from './Cal';
import TheBag from './TheBag';

function Bag () {
    const { bag } = useContext(GlobalContext);

    return (
        <>
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        Bag
                    </h1>
                    <div class="numbering">{bag.length}</div>
                </div>

                 {bag.length > 0 ? (
                    <ul className="movie-grid">
                        {bag.map((product, index) => (
                            <li key={index}>
                                <TheBag  product= {product} type="bag"/>
                           </li>
                             
                        ))}
                                <Cal bag={bag}/>
                       
                        
                    </ul>
                    
                 )  : (
                    <div className="no-Bag">
                        <div className="noimg">
                            <img src={`https://mysoko.app/static/media/group@3x%203.2d2dde74.jpg`} alt="logo" />     
                        </div>
                        <div className="empty">
                            It's Empty here
                        </div>
                        <div className="shop">
                            start shopping to add items to your bag
                        </div>
                       
                    
                     </div>
        
                )}
                
            </div>   
        </div> 
         <div className="lasts">
         <Link to="/" className="home">
             <p className="pc"><img src={`data:image/png;base64,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`} alt="logo" /></p>
             <p className="pp">Home</p>
         </Link>
         <Link to="/Bag" className="bag">
             <div className="line"></div>
             <p className="pc"><img src={`data:image/png;base64,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`} alt="logo" /></p>
             <p className="pp">Bag</p>
         </Link>
         <Link to="/Account" className="account">
             <p className="pc"><img src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFO0lEQVR4Ae2cT0gUURzH3fVfhz0UxIqCpwUP0q2gCIy0TiKllFogQl2iSxASRYWn9CZBty4drPDfhhbiTY2EKNCrB3FPguISFLSHFN3t+4M3Om/2vXk7vtl1Z3wD8t683/vz+33mN795z9k3FRXmMAQMgSISiHjtO5fLRaempi4j7cTfebRviEQiDcjHvPZVzPrQKQOdNjHGJvIr+Jvp7u7+jjTrZdyCAS0uLp5Kp9OP0PkABo57GaRc6gJOGrqMxOPxN62trf8K0asgQBMTE7cA5TU6bCyk0wDU2QCsx729vZ9UukbdKgBKBHCGkCZRLyxwyORGsonZ5uokUiGDM4bOeqnHEB8T8KS78KicyMZKUSGVNTc3DyF5KJOHqPzc6upqdTKZXBDZJPQgFnPotnI75iEcr6mp+ba3t7fZ09OTcatcatnc3FxtJpNJZLPZi/COPtwRbW46oM5tUUzKA0RPq+3t7TV0Jos5qcrKynt4ZC65DVhuMkxNru7v77+FXk0S3Tbq6uqanE+3vCDNHuUyOEu1tbUXggaHgEDnr7FY7BKysgvbyGzn+HGA4IZ0PsDVODxZwwA3u7q6/hwWBSvX0dHxGxf4BrROSTSnOR7HhDthM2ThJBC31QMaQNJxYIrpAlOIECkMOHFiYJdxgFCh0y605efJRW3ngc6yEEEPmbzDycAJiNZWouOjqDDgZeMi/QGIY8ABQoMGUaNoNPpTVB7kMpqeSPTnGHCAMBfghFYHCM6yoGZVCVxKczeR0k4GVfZKcC/hvyza29t37PWs/PLycnUqlXqFdvdRdtYqL4cUhm5Bj1Gkg5jE7jp1oont+Hj+XeZkwAFydqI6X19fp+XIE1W945DD0HqM+5SN/eyoOnC32BE66T9Cm1I30dJRCxDc19N/50pNho2Xt5zyoocWIAw06mWw46iLW+29zrhaMYgCIBu8n93zOrr43fYX9HuXSCRe6nSsBYg9HSgAHjkI6ihfira6t1gpdDzWMQwgBX4DyABSEFCIjQcpAGk9xYK8FlNwORBrATJrsQOO0ozWOkfaq78CLR21YpBZi6mv5Ki6yvHWMGsxOX+zFpOz8U+iFYP8U6N8ezKAFNfGADKAFAQUYuNBCkBaS41irMUw+XR9n6Wwx3exFqBirMX8ep/lFyndW0xrnaMwoph9K4Y+FGsBKvJaTOt91qGJejktQBh6VG94eWvdNZS8Z28SrRgEDxpkw/n5XsyXNZQ3DPLaWoDMezE52BMj0Y1BoQdlACkusQFkACkIKMScB+GxLdyQMjk5KfztoqLvshbTZheRgmDw117OAcLkTPjLz6qqKuGvX+0dBS1PO4FEOoMBLZYPDg4QSoWAdnd3rxy0CEmGtklJTOEYcIDgXiuiRigP3a5D2NQnsXXZXu4ENGMXWnm43XVs8mixzoOe0t4x2NQmsgPgPtvLuRUzGkURkLeQinb8pGivWJC3Q5Hhs7OzZxB/fiDbZAdBecBJY/lUjzRryZweRIIRS+hIEzs7O19oAEd5YE6np6dPAw55SB4cZsSIHQ6VcYCogDbdI9mgvOBoIfrkogJZWRdRiMAFpvgiCxUbzHbODu4WsySFbOoF6QXcih9oJxBtdpHt57D6LHVKczeanrAn8B2Mf81NB9hT2KZeqxO26f65dR7mFHCGseP5hchGoQdRRXgHfXVhDNnQPeIdIFw/LJAXg6zGoJpjXyQYtsrCljLPkX51geyVepAdBotJJ/LjJgUBIljm8zh2l3HJ02QSj8wT84ElFxRGZAgYAvoE/gPgPfGx80UuAQAAAABJRU5ErkJggg==`} alt="logo" /></p>
             <p className="pp">Account</p>
         </Link>
     </div>
     </>  
    
         
    )
}


export default Bag;
