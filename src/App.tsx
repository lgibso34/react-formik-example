import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "./components/FormFields/TextFormField";
import { SliderFormField } from "./components/FormFields/SliderFormField";
import { SelectFormField } from "./components/FormFields/SelectFormField";

const schema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().email()
})

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 200, margin: "auto" }}>
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", email: "" }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div>
                <Field
                  label="Username"
                  name="username"
                  component={TextFormField}
                />
              </div>
              <div>
              <Field
                  label="Email"
                  name="email"
                  component={TextFormField}
                />
              </div>
              <div>
              <Field
                  label="Age"
                  name="age"
                  component={SliderFormField}
                />
              </div>
              <div>
              <Field
              options={[
                {label: "Dog", value: "dog"},
              { label: "Cat", value: "cat"}
            ]}
                  label="Pet"
                  name="pet"
                  component={SelectFormField}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;