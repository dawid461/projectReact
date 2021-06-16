import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
const form_id = 'form_id';
class MaintenanceForm extends Component {

    editOnClick = (event) => {
        event.preventDefault()
        const data = !(this?.props?.status?.edit)
        this.props.setStatus({
            edit: data,
        })
    }

    cancelOnClick = (event) => {
        event.preventDefault()
        this.props.resetForm()
        this.props.setStatus({
            edit: false,
        })
    }

    _renderAction() {
        return (
            <React.Fragment>
                {
                    this?.props?.status?.edit ?
                        <React.Fragment>
                            <div className="buttonContainer2">
                                <button type="submit" form={form_id}>Save</button>
                                <button onClick={this.cancelOnClick} style={{ marginLeft: "8px" }}>Cancel</button>
                            </div>
                        </React.Fragment>
                        :
                        <div className="buttonContainer2">
                            <button onClick={this.editOnClick}>Edit</button>
                        </div>
                }
            </React.Fragment>
        );
    }

    _renderFormView = () => {
        return (
            <React.Fragment>
                <div className="Container2">
                    <div className="Box1Container2">
                        <img src="./media/icons/house.svg" alt="profile" className="profileImg" />
                        <a href="#">See Profile</a>
                    </div>

                    <div className="Box2Container2">
                        <div className="label1Container2">
                            <label type="text" name="name">
                                {this?.props?.fields?.name}
                            </label>
                        </div>

                        <div className="label1Container2">
                            <label type="text" name="city">
                                {this?.props?.fields?.city}
                            </label>
                        </div>

                        <div className="label1Container2">
                            <label type="text" name="job">
                                {this?.props?.fields?.job}
                            </label>
                        </div>
                    </div>


                    <div className="Box3Container2">
                        <div className="label2Container2">
                            <label type="text" name="email">
                                {this?.props?.fields?.email}
                            </label>
                        </div>

                        <div className="label2Container2">
                            <label type="text" name="mobile_no">
                                {this?.props?.fields?.mobile_no}
                            </label>
                        </div>
                    </div>
                </div>



                <div className="Container3">
                    <div className="Box1Container3">
                        <div className="label1Container3">
                            <span className="TitleContainer3">Expertise</span>
                            <label type="text" name="expertise">
                                {this?.props?.fields?.expertise}
                            </label>
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Specialties</span>
                            <label type="text" name="specialist" >
                                {this?.props?.fields?.specialist}
                            </label>
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Admission to practice law</span>
                            <label type="text" name="admission" >
                                {this?.props?.fields?.admission}
                            </label>
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Counties</span>
                            <label type="text" name="counties" >
                                {this?.props?.fields?.counties}
                            </label>
                        </div>
                    </div>
                </div>



                <div className="Container4">
                    <h1>Panel informations</h1>
                    <div className="Box1Container4">
                        <div className="label1Container4">
                            <span className="TitleContainer4">Hourly fee</span>
                            <label type="text" name="hourly">
                                {this?.props?.fields?.hourly}
                            </label>
                        </div>

                        <div className="label1Container4">
                            <span className="TitleContainer4">Terms & Conditions</span>
                            <label type="text" name="terms" >
                                {this?.props?.fields?.terms}
                            </label>
                            <input type="file" className="inputFile" />
                        </div>

                        <div className="label1Container4">
                            <h1>Services & projects</h1>
                            <label type="text" name="services" >
                                {this?.props?.fields?.services}
                            </label>
                        </div>

                        <div className="label1Container4">
                            <span className="TitleContainer4">Internal correspondants</span>

                            <div className="MiniBox">
                                <div className="IconWithText1">
                                    <img src="./media/icons/house.svg" alt="profile" />
                                    <label type="text" name="internal" >
                                        {this?.props?.fields?.internal}
                                    </label>
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/comments.svg" alt="message" />
                                    <span>Message</span>
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/people.svg" alt="message" />
                                    <span>Profile</span>
                                </div>
                            </div>

                            <div className="MiniBox">
                                <div className="IconWithText1">
                                    <img src="./media/icons/house.svg" alt="profile" />
                                    <label type="text" name="internal" >
                                        {this?.props?.fields?.internal}
                                    </label>
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/comments.svg" alt="message" />
                                    <span>Message</span>
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/people.svg" alt="message" />
                                    <span>Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="Container5">
                    <h1>Proposals</h1>
                    <div className="Box1Container5">
                        <div className="label1Container5">
                            <span className="TitleContainer5">Name</span>
                            <span className="TitleContainer5">Entity</span>
                            <span className="TitleContainer5">Location</span>
                            <span className="TitleContainer5">Expertise</span>
                            <span className="TitleContainer5">Date</span>
                            <span className="TitleContainer5">Firm</span>
                        </div>
                    </div>

                    <div className="Box2Container5">
                        <div className="label2Container5">
                            <label type="text" name="name1">
                                {this?.props?.fields?.name1}
                            </label>
                            <label type="text" name="entity1">
                                {this?.props?.fields?.entity1}
                            </label>
                            <label type="text" name="location1">
                                {this?.props?.fields?.location1}
                            </label>
                            <label type="text" name="expertise1">
                                {this?.props?.fields?.expertise1}
                            </label>
                            <label type="text" name="date1">
                                {this?.props?.fields?.date1}
                            </label>
                            <label type="text" name="firm1">
                                {this?.props?.fields?.firm1}
                            </label>
                        </div>
                    </div>


                    <div className="Box2Container5">
                        <div className="label2Container5">
                            <label type="text" name="name2">
                                {this?.props?.fields?.name2}
                            </label>
                            <label type="text" name="entity2">
                                {this?.props?.fields?.entity2}
                            </label>
                            <label type="text" name="location2">
                                {this?.props?.fields?.location2}
                            </label>
                            <label type="text" name="expertise2">
                                {this?.props?.fields?.expertise2}
                            </label>
                            <label type="text" name="date2">
                                {this?.props?.fields?.date2}
                            </label>
                            <label type="text" name="firm2">
                                {this?.props?.fields?.firm2}
                            </label>
                        </div>
                    </div>


                    <div className="Box2Container5">
                        <div className="label2Container5">
                            <label type="text" name="name3">
                                {this?.props?.fields?.name3}
                            </label>
                            <label type="text" name="entity3">
                                {this?.props?.fields?.entity3}
                            </label>
                            <label type="text" name="location3">
                                {this?.props?.fields?.location3}
                            </label>
                            <label type="text" name="expertise3">
                                {this?.props?.fields?.expertise3}
                            </label>
                            <label type="text" name="date3">
                                {this?.props?.fields?.date3}
                            </label>
                            <label type="text" name="firm3">
                                {this?.props?.fields?.firm3}
                            </label>
                        </div>
                    </div>

                    <div className="linkCon5">
                        <a>See more proposals</a>
                    </div>

                </div>

            </React.Fragment>
        );
    }

    _renderFormInput = () => {
        return (
            <React.Fragment>

                <div className="Container2">
                    <div className="Box1Container2">
                        <img src="./media/icons/house.svg" alt="profile" className="profileImg" />
                        <a href="#">See Profile</a>
                    </div>

                    <div className="Box2Container2">
                        <div className="label1Container2">
                            <Field type="text" name="name" placeholder="Name" />
                        </div>


                        <div className="label1Container2">
                            <Field type="text" name="city" placeholder="City" />
                        </div>


                        <div className="label1Container2">
                            <Field type="text" name="job" placeholder="Job" />
                        </div>
                    </div>


                    <div className="Box3Container2">

                        <div className="label2Container2">
                            <Field type="text" name="email" placeholder="Email" />
                        </div>


                        <div className="label2Container2">
                            <Field type="text" name="mobile_no" placeholder="Mobile No" />
                        </div>

                    </div>
                </div>



                <div className="Container3">
                    <div className="Box1Container3">
                        <div className="label1Container3">
                            <span className="TitleContainer3">Expertise</span>
                            <Field type="text" name="expertise" placeholder="expertise" />
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Specialties</span>
                            <Field type="text" name="specialist" placeholder="specialties" />
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Admission to practice law</span>
                            <Field type="text" name="admission" placeholder="Admission to practice law" />
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Counties</span>
                            <Field type="text" name="counties" placeholder="Counties" />
                        </div>
                    </div>
                </div>


                <div className="Container4">
                    <h1>Panel informations</h1>
                    <div className="Box1Container4">
                        <div className="label1Container4">
                            <span className="TitleContainer4">Hourly fee</span>
                            <Field type="text" name="hourly" placeholder="Hourly fee" />
                        </div>

                        <div className="label1Container4">
                            <span className="TitleContainer4">Terms & Conditions</span>
                            <Field type="text" name="terms" placeholder="terms" />
                            <input type="file" className="inputFile" />
                        </div>

                        <div className="label1Container4">
                            <span className="TitleContainer4">Services & projects</span>
                            <Field type="text" name="services" placeholder="services" />
                        </div>

                        <div className="label1Container4">
                            <span className="TitleContainer4">Internal correspondants</span>

                            <div className="MiniBox">
                                <div className="IconWithText1">
                                    <img src="./media/icons/house.svg" alt="profile" />
                                    <Field type="text" name="internal" placeholder="internal" />
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/comments.svg" alt="message" />
                                    <span>Message</span>
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/people.svg" alt="message" />
                                    <span>Profile</span>
                                </div>
                            </div>

                            <div className="MiniBox">
                                <div className="IconWithText1">
                                    <img src="./media/icons/house.svg" alt="profile" />
                                    <Field type="text" name="internal" placeholder="internal" />
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/comments.svg" alt="message" />
                                    <span>Message</span>
                                </div>

                                <div className="IconWithText2">
                                    <img className="ImgMessage" src="./media/icons/people.svg" alt="message" />
                                    <span>Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="Container5">
                    <h1>Proposals</h1>
                    <div className="Box1Container5">
                        <div className="label1Container5">
                            <span className="TitleContainer5">Name</span>
                            <span className="TitleContainer5">Entity</span>
                            <span className="TitleContainer5">Location</span>
                            <span className="TitleContainer5">Expertise</span>
                            <span className="TitleContainer5">Date</span>
                            <span className="TitleContainer5">Firm</span>
                        </div>
                    </div>

                    <div className="Box2Container5">
                        <div className="label2Container5">
                            <Field type="text" name="name1" placeholder="name1" />
                            <Field type="text" name="entity1" placeholder="entity1" />
                            <Field type="text" name="location1" placeholder="location1" />
                            <Field type="text" name="expertise1" placeholder="expertise1" />
                            <Field type="text" name="date1" placeholder="date1" />
                            <Field type="text" name="firm1" placeholder="firm1" />
                        </div>
                    </div>


                    <div className="Box2Container5">
                        <div className="label2Container5">
                            <Field type="text" name="name2" placeholder="name2" />
                            <Field type="text" name="entity2" placeholder="entity2" />
                            <Field type="text" name="location2" placeholder="location2" />
                            <Field type="text" name="expertise2" placeholder="expertise2" />
                            <Field type="text" name="date2" placeholder="date2" />
                            <Field type="text" name="firm2" placeholder="firm2" />
                        </div>
                    </div>


                    <div className="Box2Container5">
                        <div className="label2Container5">
                            <Field type="text" name="name3" placeholder="name3" />
                            <Field type="text" name="entity3" placeholder="entity3" />
                            <Field type="text" name="location3" placeholder="location3" />
                            <Field type="text" name="expertise3" placeholder="expertise3" />
                            <Field type="text" name="date3" placeholder="date3" />
                            <Field type="text" name="firm3" placeholder="firm3" />
                        </div>
                    </div>

                    <div className="linkCon5">
                        <a>See more proposals</a>
                    </div>

                </div>

            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>

                {this._renderAction()}
                <Form id={form_id}>
                    {
                        this?.props?.status?.edit
                            ?
                            this._renderFormInput()
                            :
                            this._renderFormView()
                    }
                </Form>
                <h4>Current value</h4>
                <div>
                    <pre>
                        <code>{JSON.stringify(this.props.fields, null, 2)}</code>
                    </pre>
                </div>
            </React.Fragment>
        );
    }
}

const FormikForm = withFormik({
    mapPropsToStatus: (props) => {
        return {
            edit: props?.edit || false,
        }
    },
    mapPropsToValues: (props) => {
        return {
            /*-section1-*/
            name: props.fields.name,
            city: props.fields.city,
            job: props.fields.job,
            email: props.fields.email,
            mobile_no: props.fields.mobile_no,
            /*-section2-*/
            expertise: props.fields.expertise,
            specialist: props.fields.specialist,
            admission: props.fields.admission,
            counties: props.fields.counties,
            /*-section3-*/
            hourly: props.fields.hourly,
            terms: props.fields.terms,
            services: props.fields.services,
            internal: props.fields.internal,
            /*-section4-*/
            name1: props.fields.name1,
            name2: props.fields.name2,
            name3: props.fields.name3,
            entity1: props.fields.entity1,
            entity2: props.fields.entity2,
            entity3: props.fields.entity3,
            location1: props.fields.location1,
            location2: props.fields.location2,
            location3: props.fields.location3,
            expertise1: props.fields.expertise1,
            expertise2: props.fields.expertise2,
            expertise3: props.fields.expertise3,
            date1: props.fields.date1,
            date2: props.fields.date2,
            date3: props.fields.date3,
            firm1: props.fields.firm1,
            firm2: props.fields.firm2,
            firm3: props.fields.firm3,
        }
    },
    enableReinitialize: true,
    handleSubmit: (values, { props, ...actions }) => {
        props.updateFields(values);
        actions.setStatus({
            edit: false,
        });
    }
})(MaintenanceForm);

export default FormikForm;