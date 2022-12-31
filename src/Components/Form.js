import React from "react";
import { Button, Field } from "./Data";

const Form = () => {
    return (
        <div>
            <div>
                <h3>Get in touch</h3>
                <p>
                    <span>We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.</span>
                </p>
            </div>
            <form>
                <div>
                    <ul>
                        <li key='Name'>
                            <div>
                                <h3>
                                    <span>Name</span>
                                </h3>
                                <div>
                                    <Field
                                        type='input'
                                        text='First Name'
                                        for='fname'
                                        Type='text'
                                    />
                                    <Field
                                        type='input'
                                        text='Last Name'
                                        for='lname'
                                        Type='text'
                                    />
                                </div>
                            </div>
                        </li>
                        <li key='Contact'>
                            <div>
                                <Field
                                    type='required'
                                    text='Email'
                                    content={
                                        <Field
                                            type='input'
                                            Type='email'
                                            for='email'
                                        />
                                    }
                                />
                                <Field
                                    type='input'
                                    text='Tel'
                                    required={false}

                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <Button
                        text={
                            <Field
                                type='input'
                                value='Submit'
                                Type='Submit'
                            />
                        }
                    />
                </div>
                <div>
                    <textarea id='textArea' rows={'10'} style={{ width: '100%' }}></textarea>
                </div>
            </form>
        </div>
    );
};
export default Form