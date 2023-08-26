import React from 'react';

interface ProjectProps {
    index: number;
    title: string;
    setModal: (data: { active: boolean, index: number }) => void;
}

const Project: React.FC<ProjectProps> = ({ index, title, setModal }) => {
    const projectStyle = {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px 100px',
        borderTop: '1px solid rgb(201, 201, 201)',
        borderBottom: index === 0 ? '1px solid rgb(201, 201, 201)' : 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        opacity: 1,
        ':hover': {
            opacity: 0.5,
        },
    };

    const titleStyle = {
        fontSize: '60px',
        margin: '0px',
        fontWeight: 400,
        transition: 'all 0.4s',
        ':hover': {
            transform: 'translateX(-10px)',
        },
    };

    const descriptionStyle = {
        transition: 'all 0.4s',
        fontWeight: 300,
        ':hover': {
            transform: 'translateX(10px)',
        },
    };

    return (
        <div
            onMouseEnter={() => {
                setModal({ active: true, index });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index });
            }}
            style={projectStyle}
        >
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>Design & Development</p>
        </div>
    );
};

export default Project;
