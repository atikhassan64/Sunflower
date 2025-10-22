import React from 'react';
import { Link } from 'react-router';

const SkillCard = ({ card }) => {
    const { image, skillName, rating, price, skillId } = card;
    // console.log(image, skillName, rating, price)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt={skillName} className='w-full h-[250px] object-cover' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary line-clamp-1">
                        {skillName}
                    </h2>
                    
                    <div className="card-actions flex justify-between items-center">
                        <div className="badge text-accent ">{price} USD</div>
                        <div className="badge text-accent ">{rating} star</div>
                    </div>
                    <div>
                        <Link to={`/skill_details/${skillId}`} className='btn btn-outline btn-secondary w-full'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;