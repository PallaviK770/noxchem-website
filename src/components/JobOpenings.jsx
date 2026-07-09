import { useState } from "react";
import ApplicationModal from "./ApplicationModal";
import jobs from "../constants/jobs";

export default function JobOpenings() {

    const [selectedJob, setSelectedJob] = useState("");
    const [showModal, setShowModal] = useState(false);

    function openApplication(job) {
        setSelectedJob(job);
        setShowModal(true);
    }

    return (
        <>
            <section className="py-20 bg-[#F8FAFC]" id="jobs">

                <div className="max-w-7xl mx-auto px-8">

                    <h2 className="text-4xl font-bold text-center text-[#0A4DA3]">
                        Current Open Positions
                    </h2>

                    <p className="text-center text-gray-600 mt-4">
                        Find a role that matches your skills and begin your journey with us.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                        {jobs.map((job, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
                            >

                                <h3 className="text-2xl font-semibold text-[#0A4DA3] mb-6">
                                    {job.title}
                                </h3>

                                <p className="mb-3"><strong>Department:</strong> {job.department}</p>

                                <p className="mb-3"><strong>Location:</strong> {job.location}</p>

                                <p className="mb-3"><strong>Experience:</strong> {job.experience}</p>

                                <p className="mb-6"><strong>Qualification:</strong> {job.qualification}</p>

                                <button
                                    onClick={() => openApplication(job.title)}
                                    className="bg-[#0A4DA3] hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition w-full font-semibold"
                                >
                                    Apply Now
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <ApplicationModal
                show={showModal}
                job={selectedJob}
                closeModal={() => setShowModal(false)}
            />
        </>
    );
}