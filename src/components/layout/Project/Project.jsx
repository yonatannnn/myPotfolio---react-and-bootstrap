import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Project/Project.css';

const Project = ({ images, link, title, description ,isMobile , githubLink }) => {

    const file = isMobile ? ".apk file" : "website link";

    return (
        <div className='project d-flex flex-column mb-3' style={{
            width: "100%",
            maxWidth: "600px",
            gap: "10px",
            textDecoration: "none",
            color: "inherit", 
            cursor: "pointer" 
        }}>
            <div className='d-flex gap-1 ' >
                <img src={images[0]} alt="Project Image 1" style={{
                    width: "50%",
                    height: "auto",
                    flex: "1",
                    
                }} />
                <img src={images[1]} alt="Project Image 2" style={{
                    width: "50%",
                    height: "auto",
                    flex: "1",
                    borderRadius: "5px"
                }} />
            </div>
            <div className='d-flex flex-column'>
                <h2 className='text-warning'>{title}</h2>
                <p className='text-white'>{description}</p>
                <div className='d-flex gap-5' style={{
                    borderRadius: "5px",
                    padding: '3px'
                }}>
                <a href={githubLink} className='text-warning' style={{
                    textDecoration : "none",
                    fontSize: "18px",
                    textDecorationLine: "underline"
                }} >Github Link</a>

                <a href={link}  className='text-warning' style={{
                    textDecoration : "none",
                    fontSize: "18px",
                    textDecorationLine: "underline"
                }}>{file}</a>
                </div>
                
            </div>
        </div>
    );
}

export default Project;
