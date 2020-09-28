import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import "../styles/AddSmurf.scss";

const schema = yup.object().shape({
  name: yup.string().required("required"),
  age: yup
    .number("must be a number")
    .typeError("must be a number")
    .required("required"),
  height: yup

    .number("must be a number")
    .typeError("must be a number")
    .required("required"),
});

function AddSmurf(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => props.addSmurf(data);
  return (
    <div className="addSmurf">
      {true && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              ref={register}
            ></input>
            {errors.name?.message}
          </label>
          <label htmlFor="age">
            <input
              type="text"
              id="age"
              name="age"
              placeholder="age"
              ref={register}
            ></input>
            {errors.age?.message}
          </label>
          <label htmlFor="height">
            <input
              type="text"
              id="height"
              name="height"
              placeholder="height"
              ref={register}
            ></input>
            {errors.height?.message}
          </label>
          <button type="submit">add smurf</button>
        </form>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    apiStatus: state.apiStatus,
  };
};
export default connect(mapStateToProps, { addSmurf })(AddSmurf);
