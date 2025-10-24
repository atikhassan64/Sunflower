import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillDetail from '../components/SkillDetail';
import SkillDetailForm from '../components/SkillDetailForm';

const SkillDetailsPage = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const convertedId = parseInt(id);
    const [details, setDetails] = useState({});
    useEffect(() => {
        const skillDetails = data.find(d => d.skillId === convertedId);
        setDetails(skillDetails);
    }, [data, convertedId])
    return (
        <div className='max-w-11/12 mx-auto grid md:grid-cols-12 gap-10 py-10'>
            <section className='col-span-7 lg:col-span-8'>
                <SkillDetail details={details} />
            </section>
            <aside className='col-span-7 mx-auto md:mx-0 md:col-span-5 lg:col-span-4 '>
                <SkillDetailForm />
            </aside>
        </div>
    );
};

export default SkillDetailsPage;