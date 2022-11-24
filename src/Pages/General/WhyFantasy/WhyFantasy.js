import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { GiShakingHands } from 'react-icons/gi';

const WhyFantasy = () => {
    return (
        <div className='grid md:grid-cols-3 justify-around p-10'>
            <div className="card w-96 shadow-xl image-full mb-10">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <div>
                            <h2 className="flex text-3xl font-semibold"><GiTakeMyMoney className='text-6xl' /> Money Back Guarantee</h2>
                        </div>
                        <p>And if you simply don’t like the car, you can return it to us within 14 days of receiving it.</p>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>More...</p>
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p className='text-2xl font-semibold'>Can I really return the car?</p>
                            <p> Of course, you can. We trust our service and know that we only sell inspected vehicles in excellent technical condition. Together with our customers we are fighting for better vehicles on roads.
                                <br />
                                Fantasy Car, therefore, always assumes all risks connected with the vehicle. And if you simply don’t like the car, you can return it to us up to 14 days after receiving it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl image-full  mb-10">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <div>
                            <h2 className="flex text-3xl font-semibold"><AiOutlineSafetyCertificate className='text-6xl' /> Safe Purchase</h2>
                        </div>
                        <p>We carefully inspect each car and guarantee it is in good condition before the purchase.</p>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>More...</p>
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p className='text-2xl font-semibold'>You don’t risk anything buying</p>
                            <p> Fantasy Car is the safest way of buying a used car. Before each purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation.
                                <br />
                                You always sign the contract with Fantasy Car, so all guarantees are provided by us - you only need to buy the car, in your native language.
                                <br />
                                Wherever the car is from, you always make the payment to a local account in your local curency.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <div>
                            <h2 className="flex text-3xl font-semibold"><GiShakingHands className='text-6xl' /> 6-Month warranty</h2>
                        </div>
                        <p>In addition, with every car you receive an extended warranty.</p>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>More...</p>
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p className='text-2xl font-semibold'>You receive an extended warranty on the car</p>
                            <p>For even greater peace of mind, aside from the warranty for hidden defects, you also have from us an extended 6-month warranty on the essentials - the engine, gearbox and differential. With, of course, zero involvement and even for an unlimited amount of defects.
                                <br />
                                If you want even more, you can choose a longer period of coverage for other parts of the vehicle in the order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyFantasy;