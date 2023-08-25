import React from "react";

const validateEmail = RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      emailId: "",
      gender: "female",
      roleAppliedFor: "mern",
      coverLetter: "",
      termsAndCond: true,
      errors: {
        fullname: "",
        emailId: "",
        coverLetter: "",
        termsAndCond: "",
      },
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;

    const errors = this.state.errors;

    switch (name) {
      case "fullname":
        {
          if (value.length <= 5) {
            errors.fullname = "Fullname atleast 6 characters";
          } else errors.fullname = "";
        }
        break;

      case "emailId":
        {
          if (value.length <= 5) {
            errors.emailId = "email atleast 6 characters";
          } else if (!validateEmail.test(value)) {
            errors.emailId = "Email is Invalid";
          } else errors.emailId = "";
        }
        break;

      case "coverLetter":
        {
          if (value.length <= 9) {
            errors.coverLetter = "Cover Letter atleast 6 characters";
          } else errors.coverLetter = "";
        }
        break;

      case "termsAndCond":
        {
          if (!value) {
            errors.termsAndCond = "Terms Should be accepted";
          } else errors.termsAndCond = "";
        }
        break;
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h2>Job Application Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name: </label>
            <input
              name="fullname"
              type="text"
              value={this.state.fullname}
              onChange={this.handleChange}
              required
            />
            <span>{this.state.errors.fullname}</span>
          </div>
          <br />

          <div>
            <label>Email: </label>
            <input
              name="emailId"
              type="email"
              value={this.state.emailId}
              onChange={this.handleChange}
              required
            />
            <span>{this.state.errors.emailId}</span>
          </div>
          <br />

          <div>
            <label>Gender</label>
            <input
              name="gender"
              type="radio"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            <label>male</label>

            <input
              name="gender"
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            <label>female</label>

            <input
              name="gender"
              type="radio"
              value="others"
              checked={this.state.gender === "others"}
              onChange={this.handleChange}
            />
            <label>others</label>
          </div>
          <br />

          <div>
            <label>Role Applied For: </label>
            <select
              name="roleAppliedFor"
              value={this.state.roleAppliedFor}
              onChange={this.handleChange}
            >
              <option value="react">React Developer</option>
              <option value="mern">Mern Developer</option>
              <option value="node">Node Developer</option>
            </select>
          </div>
          <br />

          <div>
            <label>Cover Letter: </label>
            <textarea
              name="coverLetter"
              value={this.state.coverLetter}
              onChange={this.handleChange}
              required
            >
              {" "}
            </textarea>
            <span>{this.state.errors.coverLetter}</span>
          </div>
          <br />

          <div>
            <input
              name="termsAndCond"
              type="checkbox"
              checked={this.state.termsAndCond}
              onChange={this.handleChange}
              required
            />
            <label>I agree to T&C </label>
            <span>{this.state.errors.termsAndCond}</span>
          </div>
          <br />

          <div>
            <button>submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default Forms;
