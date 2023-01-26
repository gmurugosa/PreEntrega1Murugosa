import React from 'react'
import '../styles/SideBar.css';
import { Nav } from "react-bootstrap";

const SideBar = () => {
    return (
        <>
            
            <Nav  className="d-md-block">
               <Nav.Item>
                    <Nav.Link>Audio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Gabinetes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Notebooks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Gaming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Conectividad</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Impresión</Nav.Link>
                </Nav.Item>
              </Nav>

        </>
    )
}

export default SideBar