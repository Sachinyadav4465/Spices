import React from 'react';

const CustomBlocks = () => {

    const blocksData = [
        {
            id: 1,
            title: "Custom Block 1",
            bgClass: "bg-block-1", 
            content: (
                <>
                    <p className="small mb-2" style={{ opacity: '0.9', lineHeight: '1.5' }}>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="small m-0" style={{ opacity: '0.9', lineHeight: '1.5' }}>
                        Lorem ipsum deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </>
            )
        },
        {
            id: 2,
            title: "Custom Block 2",
            bgClass: "bg-block-2", 
            content: (
                <div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
                    <div className="border border-light-subtle p-1 bg-white flex-shrink-0 mx-auto mx-sm-0" style={{ width: '90px', height: '90px' }}>
                        <img 
                            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=150" 
                            alt="Block Thumb" 
                            className="w-100 h-100 object-fit-cover"
                        />
                    </div>
                    <p className="small m-0" style={{ opacity: '0.9', lineHeight: '1.5' }}>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
            )
        },
        {
            id: 3,
            title: "Custom Block 3",
            bgClass: "bg-block-3", 
            content: (
                <ul className="list-unstyled d-flex flex-column gap-2 m-0 small" style={{ opacity: '0.9' }}>
                    {["Lorem ipsum dolor sit amet conse ctetur", "Adipisicing elit, sed do eiusmod", "Tempor incididunt ut labore et dolore magna", "Aliqua ut enim ad minim veniam."].map((text, index) => (
                        <li key={index} className="d-flex align-items-start gap-2">
                            <span className="fw-bold">-</span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            )
        }
    ];

    return (
        <section className="bg-spices-light py-4">
            <div className="container">
                <div className="row g-3">
                    
                  
                    {blocksData.map((block) => (
                        <div key={block.id} className="col-lg-4 col-md-6 col-12">
                           
                            <div className={`custom-block-box text-white p-4 h-100 ${block.bgClass}`}>
                                <h5 className="fw-bold text-uppercase mb-3" style={{ fontSize: '15px', letterSpacing: '0.5px' }}>
                                    {block.title}
                                </h5>
                                {block.content}
                            </div>
                        </div>
                    ))}

                </div>
                <div className="custom-bottom-divider mt-4"></div>
            </div>
        </section>
    );
};

export default CustomBlocks;