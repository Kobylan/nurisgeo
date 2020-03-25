import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup
} from "reactstrap"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { ToastContainer ,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../../assets/scss/plugins/extensions/toastr.scss"

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  name: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  password: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required("Required")
})

const adduserAPI = (values) => {
    axios
    .post("http://localhost:1337/user",values)
    .then(response =>{
        console.log(response);

        if(response.status === 200)
        toast.success('Success')

        else
        toast.error("Failed")
    })
    console.log(values);

}

class AddUser extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Msg</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            You can show error messages with formik using{" "}
            <code>validationSchema</code> prop with formik tag.
          </p>
          <Formik
            initialValues={{
              email: "",
              name: "",
              password: ""
            }}
            onSubmit={adduserAPI}
            validationSchema={SignUpSchema}
            render={({ errors, touched }) => (
              <Form>
                <FormGroup>
                  <label htmlFor="name">First Name</label>
                  <Field
                    className="form-control"
                    name="name"
                    placeholder="Jane"
                    type="text"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="password">Last Name</label>
                  <Field
                    className="form-control"
                    name="password"
                    placeholder="Doe"
                    type="password"
                  />
                  <ErrorMessage name="name">
                    {(msg /** this is the same as the above */) => (
                      <div className="field-error text-danger">{msg}</div>
                    )}
                  </ErrorMessage>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field
                    className="form-control"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                  {/* This will render a string */}
                  <ErrorMessage name="email">
                    {(msg /** this is the same as the above */) => (
                      <div className="field-error text-danger">{msg}</div>
                    )}
                  </ErrorMessage>
                </FormGroup>

                <Button.Ripple color="primary" className="mt-1" type="submit">
                  Submit
                </Button.Ripple>
                <ToastContainer />
              </Form>
            )}
          />
        </CardBody>
      </Card>
    )
  }
}
export default AddUser
