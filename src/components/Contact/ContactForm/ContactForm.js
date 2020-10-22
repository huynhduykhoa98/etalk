/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import Option from './Option';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.initialValues = {
      txtFullname: '',
      txtEmail: '',
      txtPhoneNumber: '',
      txtCompanyName: '',
      sltProjectType: '',
      sltBudget: '',
      txtDesc: '',
    };
    this.validationSchema = Yup.object().shape({
      txtFullname: Yup.string().required('this field not empty'),
      txtEmail: Yup.string().required('this field not empty'),
      txtPhoneNumber: Yup.number().required('this field not empty'),
      txtCompanyName: Yup.string(),
      sltProjectType: Yup.string(),
      sltBudget: Yup.string(),
      txtDesc: Yup.string(),
    });
  }

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={(values) =>
          Swal.fire({ icon: 'success', text: 'OK! Success' }) &&
          console.log(values)
        }
      >
        {(formikProps) => {
          const { errors, touched } = formikProps;
          const showErrortxtFullname =
            errors.txtFullname && touched.txtFullname;
          const showErrortxtEmail = errors.txtEmail && touched.txtEmail;
          const showErrortxtPhoneNumber =
            errors.txtPhoneNumber && touched.txtPhoneNumber;
          const showErrortxtCompanyName =
            errors.txtCompanyName && touched.txtCompanyName;
          const showErrortxtDesc = errors.txtDesc && touched.txtDesc;

          return (
            <Form>
              <fieldset>
                <h3>
                  <FormattedMessage id="contactHeaderInfo" />
                </h3>

                <div className="form-group">
                  <label>
                    <FormattedMessage
                      id="text"
                      defaultMessage="Full Name<strong>*</strong>"
                      values={{
                        strong: (chunk) => <strong>{chunk}</strong>,
                      }}
                    />
                  </label>
                  <Field
                    name="txtFullname"
                    type="text"
                    className="form-control"
                  />
                  {showErrortxtFullname && (
                    <strong>{errors.txtFullname}</strong>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage
                      id="text"
                      defaultMessage=" Email Address <strong>*</strong>"
                      values={{
                        strong: (chunk) => <strong>{chunk}</strong>,
                      }}
                    />
                  </label>
                  <Field name="txtEmail" className="form-control" />
                  {showErrortxtEmail && <strong>{errors.txtEmail}</strong>}
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="text" defaultMessage="Phone Number" />
                  </label>

                  <Field name="txtPhoneNumber" className="form-control" />
                  {showErrortxtPhoneNumber && (
                    <strong>{errors.txtPhoneNumber}</strong>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="text" defaultMessage="Company Name" />
                  </label>
                  <Field
                    name="txtCompanyName"
                    type="text"
                    className="form-control"
                  />
                  {showErrortxtCompanyName && (
                    <strong>{errors.txtCompanyName}</strong>
                  )}
                </div>
              </fieldset>
              <fieldset>
                <h3>
                  <FormattedMessage id="contactHeaderSkill" />
                </h3>
                <div>
                  <label>
                    <FormattedMessage
                      id="text"
                      defaultMessage="Project Type <strong>*</strong>"
                      values={{
                        strong: (chunk) => <strong>{chunk}</strong>,
                      }}
                    />
                  </label>
                </div>
                <Field
                  as="select"
                  className="custom-select mb-3"
                  style={{ borderColor: '#f90' }}
                  name="sltProjectType"
                >
                  <Option id="projectType" value="1" dat="dat" />

                  <Option id="projectType" value="2" />

                  <Option id="projectType" value="3" />

                  <Option id="projectType" value="4" />

                  <Option id="projectType" value="5" />

                  <Option id="projectType" value="6" />

                  <Option id="projectType" value="7" />

                  <Option id="projectType" value="8" />
                </Field>

                <label>
                  <FormattedMessage
                    id="text"
                    defaultMessage="Estimate Budget <strong>*</strong>"
                    values={{
                      strong: (chunk) => <strong>{chunk}</strong>,
                    }}
                  />
                </label>
                <Field
                  as="select"
                  className="custom-select mb-3"
                  style={{ borderColor: '#f90' }}
                  name="sltBudget"
                >
                  <Option id="selectBudget" value="1" />

                  <Option id="selectBudget" value="2" />

                  <Option id="selectBudget" value="3" />

                  <Option id="selectBudget" value="4" />

                  <Option id="selectBudget" value="5" />

                  <Option id="selectBudget" value="6" />
                </Field>

                <label>
                  <FormattedMessage
                    id="text"
                    defaultMessage="Project Description <strong>*</strong>"
                    values={{
                      strong: (chunk) => <strong>{chunk}</strong>,
                    }}
                  />
                </label>
                <div className="form-group">
                  <Field
                    as="textarea"
                    name="txtDesc"
                    className="form-control textarea"
                    rows={3}
                  />
                  {showErrortxtDesc && <strong>{errors.txtDesc}</strong>}
                </div>
              </fieldset>
              <button type="submit" className="btnsubmit">
                <FormattedMessage id="text" defaultMessage=" REQUEST A QUOTE" />
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}
export default ContactForm;
