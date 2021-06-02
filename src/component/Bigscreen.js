import React, {useState} from 'react';
import Bag from './Bag';
import Account from './Account';
import './Bigscreen.css'
function Bigscreen () {

    const [click, setClick] = useState(true);

    const handleClick = () =>setClick(!true)
    const handleba = () =>setClick(true)
    const handlebab = () =>setClick(!true)
    return (
        <React.Fragment>
            <div className="detail">
                <div className="bags"  onClick={handleba}>
                    <p className="pc"><img src={`data:image/png;base64,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`} alt="logo" /></p>
                    <p className="pp">Bag</p>
                </div>
            
                <div className="accounts" onClick={handleClick}>
                    <p className="pc"><img src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFO0lEQVR4Ae2cT0gUURzH3fVfhz0UxIqCpwUP0q2gCIy0TiKllFogQl2iSxASRYWn9CZBty4drPDfhhbiTY2EKNCrB3FPguISFLSHFN3t+4M3Om/2vXk7vtl1Z3wD8t683/vz+33mN795z9k3FRXmMAQMgSISiHjtO5fLRaempi4j7cTfebRviEQiDcjHvPZVzPrQKQOdNjHGJvIr+Jvp7u7+jjTrZdyCAS0uLp5Kp9OP0PkABo57GaRc6gJOGrqMxOPxN62trf8K0asgQBMTE7cA5TU6bCyk0wDU2QCsx729vZ9UukbdKgBKBHCGkCZRLyxwyORGsonZ5uokUiGDM4bOeqnHEB8T8KS78KicyMZKUSGVNTc3DyF5KJOHqPzc6upqdTKZXBDZJPQgFnPotnI75iEcr6mp+ba3t7fZ09OTcatcatnc3FxtJpNJZLPZi/COPtwRbW46oM5tUUzKA0RPq+3t7TV0Jos5qcrKynt4ZC65DVhuMkxNru7v77+FXk0S3Tbq6uqanE+3vCDNHuUyOEu1tbUXggaHgEDnr7FY7BKysgvbyGzn+HGA4IZ0PsDVODxZwwA3u7q6/hwWBSvX0dHxGxf4BrROSTSnOR7HhDthM2ThJBC31QMaQNJxYIrpAlOIECkMOHFiYJdxgFCh0y605efJRW3ngc6yEEEPmbzDycAJiNZWouOjqDDgZeMi/QGIY8ABQoMGUaNoNPpTVB7kMpqeSPTnGHCAMBfghFYHCM6yoGZVCVxKczeR0k4GVfZKcC/hvyza29t37PWs/PLycnUqlXqFdvdRdtYqL4cUhm5Bj1Gkg5jE7jp1oont+Hj+XeZkwAFydqI6X19fp+XIE1W945DD0HqM+5SN/eyoOnC32BE66T9Cm1I30dJRCxDc19N/50pNho2Xt5zyoocWIAw06mWw46iLW+29zrhaMYgCIBu8n93zOrr43fYX9HuXSCRe6nSsBYg9HSgAHjkI6ihfira6t1gpdDzWMQwgBX4DyABSEFCIjQcpAGk9xYK8FlNwORBrATJrsQOO0ozWOkfaq78CLR21YpBZi6mv5Ki6yvHWMGsxOX+zFpOz8U+iFYP8U6N8ezKAFNfGADKAFAQUYuNBCkBaS41irMUw+XR9n6Wwx3exFqBirMX8ep/lFyndW0xrnaMwoph9K4Y+FGsBKvJaTOt91qGJejktQBh6VG94eWvdNZS8Z28SrRgEDxpkw/n5XsyXNZQ3DPLaWoDMezE52BMj0Y1BoQdlACkusQFkACkIKMScB+GxLdyQMjk5KfztoqLvshbTZheRgmDw117OAcLkTPjLz6qqKuGvX+0dBS1PO4FEOoMBLZYPDg4QSoWAdnd3rxy0CEmGtklJTOEYcIDgXiuiRigP3a5D2NQnsXXZXu4ENGMXWnm43XVs8mixzoOe0t4x2NQmsgPgPtvLuRUzGkURkLeQinb8pGivWJC3Q5Hhs7OzZxB/fiDbZAdBecBJY/lUjzRryZweRIIRS+hIEzs7O19oAEd5YE6np6dPAw55SB4cZsSIHQ6VcYCogDbdI9mgvOBoIfrkogJZWRdRiMAFpvgiCxUbzHbODu4WsySFbOoF6QXcih9oJxBtdpHt57D6LHVKczeanrAn8B2Mf81NB9hT2KZeqxO26f65dR7mFHCGseP5hchGoQdRRXgHfXVhDNnQPeIdIFw/LJAXg6zGoJpjXyQYtsrCljLPkX51geyVepAdBotJJ/LjJgUBIljm8zh2l3HJ02QSj8wT84ElFxRGZAgYAvoE/gPgPfGx80UuAQAAAABJRU5ErkJggg==`} alt="logo" /></p>
                    <p className="pp">Account</p>
                </div>
            </div>
            <div  className= {click ? 'on': 'off'}>
                <Bag />
                <div className="chick" onClick={handlebab}>
                    <p className ='nav-links'>
                        checkout
                    </p>
            </div>
            </div>
           
            <div className= {click ? 'acc': 'on'} >
                <Account />
            </div>
        </React.Fragment>
       
        
     
    )
}

export default Bigscreen