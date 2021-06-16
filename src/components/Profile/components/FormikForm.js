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
                <div className="form-statusbar">
                    {
                        this?.props?.status?.edit ?
                            <React.Fragment>
                                <div className="buttonContainer2">
                                    <button className="btn btn-primary btn-sm" type="submit" form={form_id}>Save</button>
                                    <button className="btn btn-danger btn-sm" onClick={this.cancelOnClick} style={{ marginLeft: "8px" }}>Cancel</button>
                                </div>
                            </React.Fragment>
                            :
                            <div className="buttonContainer2">
                                <button className="btn btn-primary btn-sm" onClick={this.editOnClick}>Edit</button>
                            </div>
                    }
                </div>
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
                            <label type="text" name="name" className="form-control">
                                {this?.props?.fields?.name}
                            </label>
                        </div>


                        <div className="label1Container2">
                            <label type="text" name="city" className="form-control">
                                {this?.props?.fields?.city}
                            </label>
                        </div>


                        <div className="label1Container2">
                            <label type="text" name="job" className="form-control">
                                {this?.props?.fields?.job}
                            </label>
                        </div>
                    </div>


                    <div className="Box3Container2">
                        <div className="label2Container2">
                            <label type="text" name="email" className="form-control">
                                {this?.props?.fields?.email}
                            </label>
                        </div>


                        <div className="label2Container2">
                            <label type="text" name="mobile_no" className="form-control">
                                {this?.props?.fields?.mobile_no}
                            </label>
                        </div>
                    </div>
                </div>



                <div className="Container3">
                    <div className="Box1Container3">

                        <div className="label1Container3">
                            <span className="TitleContainer3">Expertise</span>
                            <label type="text" name="expertise" className="form-control">
                                {this?.props?.fields?.expertise}
                            </label>
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Specialties</span>
                            <label type="text" name="specialist" className="form-control">
                                {this?.props?.fields?.specialist}
                            </label>
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Admission to practice law</span>
                            <label type="text" name="admission" className="form-control">
                                {this?.props?.fields?.admission}
                            </label>
                        </div>

                        <div className="label1Container3">
                            <span className="TitleContainer3">Counties</span>
                            <label type="text" name="counties" className="form-control">
                                {this?.props?.fields?.counties}
                            </label>
                        </div>

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
                            <Field type="text" name="name" className="form-control" placeholder="Name" />
                        </div>


                        <div className="label1Container2">
                            <Field type="text" name="city" className="form-control" placeholder="City" />
                        </div>


                        <div className="label1Container2">
                            <Field type="text" name="job" className="form-control" placeholder="Job" />
                        </div>
                    </div>


                    <div className="Box3Container2">

                        <div className="label2Container2">
                            <Field type="text" name="email" className="form-control" placeholder="Email" />
                        </div>


                        <div className="label2Container2">
                            <Field type="text" name="mobile_no" className="form-control" placeholder="Mobile No" />
                        </div>

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
            name: props.fields.name,
            city: props.fields.city,
            job: props.fields.job,
            email: props.fields.email,
            mobile_no: props.fields.mobile_no,
            /*-section2-*/
            expertise: props.fields.expertise,
            specialist: props.fields.specialist,
            admission: props.fields.admission,
            counties: props.fields.counties
            /*-section3-*/
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